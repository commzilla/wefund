import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { subDays } from "date-fns";

interface TopClicksTableProps {
  dateRange: 'today' | 'week' | 'month';
}

export const TopClicksTable = ({ dateRange }: TopClicksTableProps) => {
  const { data: clicks, isLoading } = useQuery({
    queryKey: ['analytics-top-clicks', dateRange],
    queryFn: async () => {
      const days = dateRange === 'today' ? 1 : dateRange === 'week' ? 7 : 30;
      const startDate = subDays(new Date(), days);

      const { data } = await supabase
        .from('analytics_events')
        .select('event_name, metadata, page_url')
        .eq('event_type', 'click')
        .gte('created_at', startDate.toISOString());

      if (!data) return [];

      // Group by event_name and count
      const grouped: Record<string, { count: number; page: string }> = {};
      data.forEach((event) => {
        const name = event.event_name || 'Unknown';
        if (!grouped[name]) {
          grouped[name] = { count: 0, page: event.page_url || '' };
        }
        grouped[name].count++;
      });

      return Object.entries(grouped)
        .map(([name, data]) => ({ name, ...data }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
    },
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  if (!clicks || clicks.length === 0) {
    return <div className="text-muted-foreground text-center py-8">No click data available</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Element</TableHead>
          <TableHead>Page</TableHead>
          <TableHead className="text-right">Clicks</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clicks.map((click, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{click.name}</TableCell>
            <TableCell className="text-muted-foreground text-sm truncate max-w-[200px]">
              {new URL(click.page).pathname}
            </TableCell>
            <TableCell className="text-right">
              <Badge variant="secondary">{click.count}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
