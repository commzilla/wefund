import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { subDays } from "date-fns";

interface FunnelChartProps {
  dateRange: 'today' | 'week' | 'month';
}

export const FunnelChart = ({ dateRange }: FunnelChartProps) => {
  const { data: funnelData, isLoading } = useQuery({
    queryKey: ['analytics-funnel', dateRange],
    queryFn: async () => {
      const days = dateRange === 'today' ? 1 : dateRange === 'week' ? 7 : 30;
      const startDate = subDays(new Date(), days);
      const startDateStr = startDate.toISOString();

      // Get all sessions in period
      const { count: totalSessions } = await supabase
        .from('analytics_sessions')
        .select('*', { count: 'exact', head: true })
        .gte('started_at', startDateStr);

      // Get page views for account selector
      const { count: viewedProducts } = await supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('event_type', 'page_view')
        .ilike('page_url', '%#objectives%')
        .gte('created_at', startDateStr);

      // Get checkout initiations
      const { count: startedCheckout } = await supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('event_type', 'checkout_initiated')
        .gte('created_at', startDateStr);

      // Get completed sessions
      const { count: completed } = await supabase
        .from('analytics_sessions')
        .select('*', { count: 'exact', head: true })
        .eq('is_completed', true)
        .gte('started_at', startDateStr);

      return [
        { stage: 'Visitors', count: totalSessions || 0 },
        { stage: 'Viewed Products', count: viewedProducts || 0 },
        { stage: 'Started Checkout', count: startedCheckout || 0 },
        { stage: 'Completed', count: completed || 0 },
      ];
    },
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  if (!funnelData) {
    return <div className="text-muted-foreground">No data</div>;
  }

  const maxCount = Math.max(...funnelData.map(d => d.count), 1);

  return (
    <div className="space-y-4">
      {funnelData.map((stage, index) => {
        const percentage = maxCount > 0 ? (stage.count / maxCount) * 100 : 0;
        const dropOff = index > 0 && funnelData[index - 1].count > 0
          ? ((funnelData[index - 1].count - stage.count) / funnelData[index - 1].count * 100).toFixed(0)
          : null;

        return (
          <div key={stage.stage} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{stage.stage}</span>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{stage.count}</span>
                {dropOff && dropOff !== '0' && (
                  <span className="text-xs text-red-400">-{dropOff}%</span>
                )}
              </div>
            </div>
            <div className="h-6 bg-muted rounded-lg overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-lg transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
