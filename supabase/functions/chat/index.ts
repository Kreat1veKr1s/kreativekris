import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// --- In-memory rate limiter (per-IP, per edge function instance) ---
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now >= entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  return false;
}

// Periodically clean up expired entries to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now >= entry.resetAt) rateLimitMap.delete(ip);
  }
}, 60_000);

const SYSTEM_PROMPT = `You are the AI assistant for KreativeKris, an AI-powered creative marketing agency. You answer questions about services, pricing, and capabilities in a friendly, warm, and professional tone. Be cheerful but not overly excited — limit exclamation points to one per response at most. Prefer periods and calm confidence.

Key facts:
- Services: Websites & Landing Pages, SEO & Local SEO, Google & Social Ads, Social Media Marketing, Content & Copywriting, Branding & Design, Google Business Profile, Project Management
- Pricing: Launch/Starter ($299/mo), Grow/Core ($599/mo), Dominate/Elite ($999/mo), Custom plans available
- Track record: 50+ projects, 8+ years experience, 200% avg ROI
- Notable results: 340% lead increase for Luxe Living, 25K followers in 6mo for FreshBite, 7.2% conversion rate for Summit Financial
- Free resource: 2026 No-BS Guide & Toolkit (valued at $300+)

Response rules:
1. Keep answers concise (2-4 sentences max).
2. Always end your response with a relevant follow-up question to make sure the visitor's needs are fully addressed. Examples: "Would you like to know more about what's included in that plan?" or "What industry is your business in?"
3. When a visitor asks for a quote, pricing recommendation, or help choosing a plan, do NOT jump straight to recommending a tier. Instead, ask 2-3 qualifying questions first (one at a time) to understand their needs — such as their industry, current marketing efforts, goals, budget range, and which services interest them most. Only after gathering context should you suggest a specific plan.
4. If asked about booking a call, suggest they use the "Book a Call" or "Let's Connect" buttons on the site.
5. If asked something unrelated to marketing/the agency, politely redirect.
6. When the conversation reaches a decision point — the visitor seems interested, you've recommended a plan, or they're asking about next steps — include the exact phrase [CTA:BOOK] in your response. This signals the UI to show a "Book a Call" button. Use it naturally, not in every message — only when the visitor is ready to take action.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limit by client IP
  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") || "unknown";

  if (isRateLimited(clientIp)) {
    return new Response(JSON.stringify({ error: "Too many requests. Please wait a moment before sending another message." }), {
      status: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const messages = body?.messages;

    // Input validation
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 50) {
      return new Response(JSON.stringify({ error: "Invalid request." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate each message
    for (const msg of messages) {
      if (!msg || typeof msg.role !== "string" || typeof msg.content !== "string") {
        return new Response(JSON.stringify({ error: "Invalid message format." }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (!["user", "assistant"].includes(msg.role)) {
        return new Response(JSON.stringify({ error: "Invalid message role." }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (msg.content.length > 2000) {
        return new Response(JSON.stringify({ error: "Message too long." }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      console.error("AI gateway error:", response.status);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e instanceof Error ? e.message : "Unknown error");
    return new Response(JSON.stringify({ error: "Something went wrong. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
