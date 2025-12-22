import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  pending: {
    label: 'Pending',
    className: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20'
  },
  processing: {
    label: 'Processing',
    className: 'bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20'
  },
  completed: {
    label: 'Completed',
    className: 'bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20'
  },
  failed: {
    label: 'Failed',
    className: 'bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20'
  },
  refunded: {
    label: 'Refunded',
    className: 'bg-purple-500/10 text-purple-500 border-purple-500/20 hover:bg-purple-500/20'
  },
  cancelled: {
    label: 'Cancelled',
    className: 'bg-gray-500/10 text-gray-500 border-gray-500/20 hover:bg-gray-500/20'
  }
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.pending;

  return (
    <Badge 
      variant="outline" 
      className={cn("font-medium", config.className, className)}
    >
      {config.label}
    </Badge>
  );
}
