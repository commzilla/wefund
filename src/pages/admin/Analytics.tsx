import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, MousePointerClick, TrendingUp, Eye, Clock, Target, ArrowUpRight } from "lucide-react";
import { AnalyticsMetricCard } from "@/components/admin/analytics/AnalyticsMetricCard";
import { PageViewsChart } from "@/components/admin/analytics/PageViewsChart";
import { TopClicksTable } from "@/components/admin/analytics/TopClicksTable";
import { RecentEventsTable } from "@/components/admin/analytics/RecentEventsTable";
import { FunnelChart } from "@/components/admin/analytics/FunnelChart";
import { DeviceBreakdown } from "@/components/admin/analytics/DeviceBreakdown";

const Analytics = () => {
  const [dateRange, setDateRange] = useState<'today' | 'week' | 'month'>('week');

  const getDateFilter = () => {
    const now = new Date();
    switch (dateRange) {
      case 'today':
        return new Date(now.setHours(0, 0, 0, 0)).toISOString();
      case 'week':
        return new Date(now.setDate(now.getDate() - 7)).toISOString();
      case 'month':
        return new Date(now.setDate(now.getDate() - 30)).toISOString();
    }
  };

  // Fetch page views count
  const { data: pageViews } = useQuery({
    queryKey: ['analytics-pageviews', dateRange],
    queryFn: async () => {
      const { count } = await supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('event_type', 'page_view')
        .gte('created_at', getDateFilter());
      return count || 0;
    },
  });

  // Fetch unique sessions
  const { data: uniqueSessions } = useQuery({
    queryKey: ['analytics-sessions', dateRange],
    queryFn: async () => {
      const { count } = await supabase
        .from('analytics_sessions')
        .select('*', { count: 'exact', head: true })
        .gte('started_at', getDateFilter());
      return count || 0;
    },
  });

  // Fetch total clicks
  const { data: totalClicks } = useQuery({
    queryKey: ['analytics-clicks', dateRange],
    queryFn: async () => {
      const { count } = await supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('event_type', 'click')
        .gte('created_at', getDateFilter());
      return count || 0;
    },
  });

  // Fetch checkout initiations
  const { data: checkoutInitiations } = useQuery({
    queryKey: ['analytics-checkouts', dateRange],
    queryFn: async () => {
      const { count } = await supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('event_type', 'checkout_initiated')
        .gte('created_at', getDateFilter());
      return count || 0;
    },
  });

  // Fetch conversions (sessions marked as converted)
  const { data: conversions } = useQuery({
    queryKey: ['analytics-conversions', dateRange],
    queryFn: async () => {
      const { count } = await supabase
        .from('analytics_sessions')
        .select('*', { count: 'exact', head: true })
        .eq('is_converted', true)
        .gte('started_at', getDateFilter());
      return count || 0;
    },
  });

  const conversionRate = uniqueSessions && uniqueSessions > 0 
    ? ((conversions || 0) / uniqueSessions * 100).toFixed(1) 
    : '0';

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track user behavior and conversions</p>
        </div>
        
        <Tabs value={dateRange} onValueChange={(v) => setDateRange(v as typeof dateRange)}>
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">7 Days</TabsTrigger>
            <TabsTrigger value="month">30 Days</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <AnalyticsMetricCard
          title="Page Views"
          value={pageViews || 0}
          icon={Eye}
          trend="+12%"
          trendUp={true}
        />
        <AnalyticsMetricCard
          title="Unique Visitors"
          value={uniqueSessions || 0}
          icon={Users}
          trend="+8%"
          trendUp={true}
        />
        <AnalyticsMetricCard
          title="Total Clicks"
          value={totalClicks || 0}
          icon={MousePointerClick}
          trend="+15%"
          trendUp={true}
        />
        <AnalyticsMetricCard
          title="Checkout Started"
          value={checkoutInitiations || 0}
          icon={Target}
          trend="+5%"
          trendUp={true}
        />
        <AnalyticsMetricCard
          title="Conversion Rate"
          value={`${conversionRate}%`}
          icon={TrendingUp}
          trend="+2.1%"
          trendUp={true}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Page Views Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PageViewsChart dateRange={dateRange} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Conversion Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FunnelChart dateRange={dateRange} />
          </CardContent>
        </Card>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Device Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <DeviceBreakdown dateRange={dateRange} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MousePointerClick className="h-5 w-5" />
              Top Clicked Elements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TopClicksTable dateRange={dateRange} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RecentEventsTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
