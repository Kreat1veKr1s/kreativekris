import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

  try {
    const { messages } = await req.json();
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
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
