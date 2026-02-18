import { useState, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ArrowLeft, Eye, Users, Monitor, Globe, TrendingUp, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface AnalyticsData {
  totalViews: number;
  uniqueSessions: number;
  pageViewsOverTime: { date: string; count: number }[];
  topReferrers: { source: string; count: number }[];
  deviceBreakdown: { device: string; count: number }[];
  geography: { location: string; count: number }[];
  topPages: { page: string; count: number }[];
}

const COLORS = [
  "hsl(175, 80%, 50%)",
  "hsl(35, 90%, 55%)",
  "hsl(280, 70%, 55%)",
  "hsl(200, 80%, 55%)",
  "hsl(340, 70%, 55%)",
];

const Dashboard = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [days, setDays] = useState(30);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const { data: result, error: fnError } = await supabase.functions.invoke("get-analytics", {
        body: null,
        method: "GET",
      });

      // supabase.functions.invoke doesn't support query params well for GET, use fetch instead
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/get-analytics?days=${days}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
        }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      setError(e.message || "Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [days]);

  const customTooltipStyle = {
    backgroundColor: "hsl(220, 18%, 8%)",
    border: "1px solid hsl(220, 16%, 16%)",
    borderRadius: "8px",
    color: "hsl(200, 20%, 92%)",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 px-4 sm:px-6 py-4">
        <div className="container max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Portfolio
              </Button>
            </Link>
            <h1 className="font-heading text-xl font-bold">
              Analytics <span className="text-gradient">Dashboard</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {[7, 30, 90].map((d) => (
              <Button
                key={d}
                variant={days === d ? "default" : "outline"}
                size="sm"
                onClick={() => setDays(d)}
              >
                {d}d
              </Button>
            ))}
            <Button variant="ghost" size="icon" onClick={fetchData} disabled={loading}>
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container max-w-7xl px-4 sm:px-6 py-8">
        {error && (
          <div className="glass rounded-xl p-6 text-center mb-8">
            <p className="text-destructive">{error}</p>
            <Button variant="outline" size="sm" className="mt-3" onClick={fetchData}>
              Retry
            </Button>
          </div>
        )}

        {loading && !data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="glass rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-muted rounded w-20 mb-3" />
                <div className="h-8 bg-muted rounded w-16" />
              </div>
            ))}
          </div>
        ) : data ? (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="glass border-border/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" /> Total Views
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold font-heading text-foreground">{data.totalViews}</p>
                </CardContent>
              </Card>
              <Card className="glass border-border/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" /> Unique Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold font-heading text-foreground">{data.uniqueSessions}</p>
                </CardContent>
              </Card>
              <Card className="glass border-border/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-primary" /> Top Device
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold font-heading text-foreground capitalize">
                    {data.deviceBreakdown.sort((a, b) => b.count - a.count)[0]?.device || "—"}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass border-border/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" /> Top Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold font-heading text-foreground truncate">
                    {data.geography[0]?.location || "—"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Page Views Over Time */}
            <Card className="glass border-border/30 mb-8">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> Page Views Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                {data.pageViewsOverTime.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data.pageViewsOverTime}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 16%)" />
                      <XAxis
                        dataKey="date"
                        stroke="hsl(215, 15%, 55%)"
                        fontSize={12}
                        tickFormatter={(v) => new Date(v).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      />
                      <YAxis stroke="hsl(215, 15%, 55%)" fontSize={12} />
                      <Tooltip contentStyle={customTooltipStyle} />
                      <Line
                        type="monotone"
                        dataKey="count"
                        stroke="hsl(175, 80%, 50%)"
                        strokeWidth={2}
                        dot={{ fill: "hsl(175, 80%, 50%)", r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Views"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-muted-foreground text-center py-12">No data yet. Views will appear as visitors browse your portfolio.</p>
                )}
              </CardContent>
            </Card>

            {/* Two-column row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Device Breakdown */}
              <Card className="glass border-border/30">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-primary" /> Device Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {data.deviceBreakdown.length > 0 ? (
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={data.deviceBreakdown}
                          dataKey="count"
                          nameKey="device"
                          cx="50%"
                          cy="50%"
                          outerRadius={90}
                          label={({ device, percent }) => `${device} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {data.deviceBreakdown.map((_, i) => (
                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={customTooltipStyle} />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <p className="text-muted-foreground text-center py-12">No data yet</p>
                  )}
                </CardContent>
              </Card>

              {/* Top Referrers */}
              <Card className="glass border-border/30">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" /> Top Referrers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {data.topReferrers.length > 0 ? (
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={data.topReferrers} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 16%)" />
                        <XAxis type="number" stroke="hsl(215, 15%, 55%)" fontSize={12} />
                        <YAxis dataKey="source" type="category" width={120} stroke="hsl(215, 15%, 55%)" fontSize={11} />
                        <Tooltip contentStyle={customTooltipStyle} />
                        <Bar dataKey="count" fill="hsl(35, 90%, 55%)" radius={[0, 4, 4, 0]} name="Visits" />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <p className="text-muted-foreground text-center py-12">No referrer data yet</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Geography + Top Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass border-border/30">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" /> Visitor Geography
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {data.geography.length > 0 ? (
                    <div className="space-y-3">
                      {data.geography.map((g, i) => (
                        <div key={g.location} className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-xs text-muted-foreground w-5 text-right">{i + 1}</span>
                            <span className="text-sm text-foreground truncate">{g.location}</span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${(g.count / data.geography[0].count) * 100}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground w-8 text-right">{g.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-12">No geo data yet</p>
                  )}
                </CardContent>
              </Card>

              <Card className="glass border-border/30">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" /> Top Pages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {data.topPages.length > 0 ? (
                    <div className="space-y-3">
                      {data.topPages.map((p, i) => (
                        <div key={p.page} className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-xs text-muted-foreground w-5 text-right">{i + 1}</span>
                            <code className="text-sm text-foreground truncate">{p.page}</code>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full rounded-full bg-glow-warm"
                                style={{ width: `${(p.count / data.topPages[0].count) * 100}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground w-8 text-right">{p.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-12">No page data yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
};

export default Dashboard;
