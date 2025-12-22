import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { StatCard } from "@/components/admin/StatCard";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { ShoppingCart, Package, DollarSign, Users, TrendingUp, Clock } from "lucide-react";

interface DashboardStats {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  totalRevenue: number;
  totalProducts: number;
  totalCustomers: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalCustomers: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch orders stats
      const { data: orders, error: ordersError } = await supabase
        .from('orders')
        .select('status, total');

      if (ordersError) throw ordersError;

      const totalOrders = orders?.length || 0;
      const pendingOrders = orders?.filter(o => o.status === 'pending').length || 0;
      const completedOrders = orders?.filter(o => o.status === 'completed').length || 0;
      const totalRevenue = orders?.filter(o => o.status === 'completed')
        .reduce((sum, o) => sum + Number(o.total), 0) || 0;

      // Fetch products count
      const { count: productsCount } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true });

      // Fetch customers count
      const { count: customersCount } = await supabase
        .from('customers')
        .select('*', { count: 'exact', head: true });

      setStats({
        totalOrders,
        pendingOrders,
        completedOrders,
        totalRevenue,
        totalProducts: productsCount || 0,
        totalCustomers: customersCount || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the WeFund CMS</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend="+12.5%"
          trendUp={true}
          isLoading={isLoading}
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders.toString()}
          icon={ShoppingCart}
          isLoading={isLoading}
        />
        <StatCard
          title="Pending Orders"
          value={stats.pendingOrders.toString()}
          icon={Clock}
          className="border-yellow-500/20"
          isLoading={isLoading}
        />
        <StatCard
          title="Completed"
          value={stats.completedOrders.toString()}
          icon={TrendingUp}
          className="border-green-500/20"
          isLoading={isLoading}
        />
        <StatCard
          title="Products"
          value={stats.totalProducts.toString()}
          icon={Package}
          isLoading={isLoading}
        />
        <StatCard
          title="Customers"
          value={stats.totalCustomers.toString()}
          icon={Users}
          isLoading={isLoading}
        />
      </div>

      {/* Recent Orders */}
      <RecentOrders />
    </div>
  );
}
