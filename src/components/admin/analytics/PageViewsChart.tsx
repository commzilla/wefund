import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format, subDays, parseISO, startOfDay } from "date-fns";

interface PageViewsChartProps {
  dateRange: 'today' | 'week' | 'month';
}

export const PageViewsChart = ({ dateRange }: PageViewsChartProps) => {
  const { data: chartData, isLoading } = useQuery({
    queryKey: ['analytics-pageviews-chart', dateRange],
    queryFn: async () => {
      const days = dateRange === 'today' ? 1 : dateRange === 'week' ? 7 : 30;
      const startDate = subDays(new Date(), days);
      
      const { data } = await supabase
        .from('analytics_events')
        .select('created_at')
        .eq('event_type', 'page_view')
        .gte('created_at', startDate.toISOString())
        .order('created_at', { ascending: true });

      if (!data) return [];

      // Group by day
      const grouped: Record<string, number> = {};
      
      // Initialize all days with 0
      for (let i = 0; i <= days; i++) {
        const date = format(subDays(new Date(), days - i), 'yyyy-MM-dd');
        grouped[date] = 0;
      }

      // Count events per day
      data.forEach((event) => {
        const date = format(parseISO(event.created_at), 'yyyy-MM-dd');
        if (grouped[date] !== undefined) {
          grouped[date]++;
        }
      });

      return Object.entries(grouped).map(([date, count]) => ({
        date: format(parseISO(date), dateRange === 'today' ? 'HH:mm' : 'MMM dd'),
        views: count,
      }));
    },
  });

  if (isLoading) {
    return (
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        Loading chart data...
      </div>
    );
  }

  if (!chartData || chartData.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        No data available for this period
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis 
          dataKey="date" 
          className="text-xs fill-muted-foreground"
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          className="text-xs fill-muted-foreground"
          tick={{ fontSize: 12 }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
          }}
          labelStyle={{ color: 'hsl(var(--foreground))' }}
        />
        <Area 
          type="monotone" 
          dataKey="views" 
          stroke="hsl(var(--primary))" 
          fill="url(#colorViews)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
