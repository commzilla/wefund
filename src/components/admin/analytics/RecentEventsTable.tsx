import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow, parseISO } from "date-fns";

const eventTypeColors: Record<string, string> = {
  page_view: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  click: "bg-green-500/10 text-green-500 border-green-500/20",
  checkout_initiated: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  cta_click: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  addon_selected: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  account_selected: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
};

export const RecentEventsTable = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ['analytics-recent-events'],
    queryFn: async () => {
      const { data } = await supabase
        .from('analytics_events')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      return data || [];
    },
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading events...</div>;
  }

  if (!events || events.length === 0) {
    return <div className="text-muted-foreground text-center py-8">No events recorded yet</div>;
  }

  return (
    <div className="max-h-[400px] overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Page</TableHead>
            <TableHead>Device</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>
                <Badge 
                  variant="outline" 
                  className={eventTypeColors[event.event_type] || ""}
                >
                  {event.event_type}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">
                {event.event_name || '-'}
              </TableCell>
              <TableCell className="text-muted-foreground text-sm truncate max-w-[200px]">
                {(() => {
                  try {
                    return new URL(event.page_url).pathname;
                  } catch {
                    return event.page_url;
                  }
                })()}
              </TableCell>
              <TableCell>
                <span className="text-xs text-muted-foreground">
                  {event.screen_width && event.screen_width < 768 ? '📱' : 
                   event.screen_width && event.screen_width < 1024 ? '📱' : '💻'}
                </span>
              </TableCell>
              <TableCell className="text-right text-sm text-muted-foreground">
                {formatDistanceToNow(parseISO(event.created_at), { addSuffix: true })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
