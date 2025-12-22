import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  className?: string;
  isLoading?: boolean;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendUp, 
  className,
  isLoading 
}: StatCardProps) {
  if (isLoading) {
    return (
      <Card className={cn("bg-card border-border", className)}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-8 rounded-lg" />
          </div>
          <Skeleton className="h-8 w-16 mt-2" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("bg-card border-border hover:border-primary/20 transition-colors", className)}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{title}</span>
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">{value}</span>
          {trend && (
            <span className={cn(
              "text-xs font-medium",
              trendUp ? "text-green-500" : "text-red-500"
            )}>
              {trend}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
