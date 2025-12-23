import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { subDays } from "date-fns";
import { Smartphone, Tablet, Monitor } from "lucide-react";

interface DeviceBreakdownProps {
  dateRange: 'today' | 'week' | 'month';
}

export const DeviceBreakdown = ({ dateRange }: DeviceBreakdownProps) => {
  const { data: deviceData, isLoading } = useQuery({
    queryKey: ['analytics-devices', dateRange],
    queryFn: async () => {
      const days = dateRange === 'today' ? 1 : dateRange === 'week' ? 7 : 30;
      const startDate = subDays(new Date(), days);

      const { data } = await supabase
        .from('analytics_sessions')
        .select('device_type')
        .gte('started_at', startDate.toISOString());

      if (!data) return { mobile: 0, tablet: 0, desktop: 0, total: 0 };

      const counts = {
        mobile: 0,
        tablet: 0,
        desktop: 0,
        total: data.length,
      };

      data.forEach((session) => {
        const type = session.device_type as keyof typeof counts;
        if (type && type in counts && type !== 'total') {
          counts[type]++;
        }
      });

      return counts;
    },
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  if (!deviceData || deviceData.total === 0) {
    return <div className="text-muted-foreground text-center py-8">No device data available</div>;
  }

  const devices = [
    { 
      name: 'Mobile', 
      count: deviceData.mobile, 
      icon: Smartphone,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    { 
      name: 'Tablet', 
      count: deviceData.tablet, 
      icon: Tablet,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    { 
      name: 'Desktop', 
      count: deviceData.desktop, 
      icon: Monitor,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
  ];

  return (
    <div className="space-y-4">
      {devices.map((device) => {
        const percentage = deviceData.total > 0 
          ? ((device.count / deviceData.total) * 100).toFixed(1)
          : '0';

        return (
          <div key={device.name} className="flex items-center gap-4">
            <div className={`p-2 rounded-lg ${device.bgColor}`}>
              <device.icon className={`h-5 w-5 ${device.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{device.name}</span>
                <span className="text-sm text-muted-foreground">{percentage}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${device.bgColor.replace('/10', '')}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
            <span className="text-sm font-medium min-w-[40px] text-right">{device.count}</span>
          </div>
        );
      })}
    </div>
  );
};
