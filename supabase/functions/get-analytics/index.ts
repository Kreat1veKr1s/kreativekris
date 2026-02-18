import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const url = new URL(req.url);
    const days = parseInt(url.searchParams.get("days") || "30");
    const since = new Date();
    since.setDate(since.getDate() - days);

    // Fetch all page views within range
    const { data: views, error } = await supabase
      .from("page_views")
      .select("*")
      .gte("created_at", since.toISOString())
      .order("created_at", { ascending: true });

    if (error) throw error;

    const allViews = views || [];

    // 1. Page views over time (group by date)
    const viewsByDate: Record<string, number> = {};
    for (const v of allViews) {
      const date = v.created_at.split("T")[0];
      viewsByDate[date] = (viewsByDate[date] || 0) + 1;
    }
    const pageViewsOverTime = Object.entries(viewsByDate).map(([date, count]) => ({ date, count }));

    // 2. Top referrers
    const refCounts: Record<string, number> = {};
    for (const v of allViews) {
      const ref = v.referrer ? new URL(v.referrer).hostname : "Direct";
      refCounts[ref] = (refCounts[ref] || 0) + 1;
    }
    const topReferrers = Object.entries(refCounts)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // 3. Device breakdown
    const deviceCounts: Record<string, number> = {};
    for (const v of allViews) {
      const d = v.device_type || "unknown";
      deviceCounts[d] = (deviceCounts[d] || 0) + 1;
    }
    const deviceBreakdown = Object.entries(deviceCounts).map(([device, count]) => ({ device, count }));

    // 4. Geography
    const geoCounts: Record<string, number> = {};
    for (const v of allViews) {
      const loc = v.city && v.region ? `${v.city}, ${v.region}` : v.country || "Unknown";
      geoCounts[loc] = (geoCounts[loc] || 0) + 1;
    }
    const geography = Object.entries(geoCounts)
      .map(([location, count]) => ({ location, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);

    // 5. Summary stats
    const uniqueSessions = new Set(allViews.map((v) => v.session_id)).size;
    const totalViews = allViews.length;

    // 6. Top pages
    const pageCounts: Record<string, number> = {};
    for (const v of allViews) {
      pageCounts[v.page_path] = (pageCounts[v.page_path] || 0) + 1;
    }
    const topPages = Object.entries(pageCounts)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return new Response(
      JSON.stringify({
        totalViews,
        uniqueSessions,
        pageViewsOverTime,
        topReferrers,
        deviceBreakdown,
        geography,
        topPages,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Analytics error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
