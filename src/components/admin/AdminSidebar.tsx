import { NavLink, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Ticket, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Upload,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import wefundLogo from "@/assets/wefund-logo.png";

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/admin/products", icon: Package, label: "Products" },
  { to: "/admin/orders", icon: ShoppingCart, label: "Orders" },
  { to: "/admin/discounts", icon: Ticket, label: "Discounts" },
  { to: "/admin/import", icon: Upload, label: "Import" },
  { to: "/admin/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/admin/settings", icon: Settings, label: "Settings" },
];

export function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <aside className="h-full bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="h-16 border-b border-border flex items-center justify-center px-4">
        {collapsed ? (
          <img src={wefundLogo} alt="WeFund" className="h-8 w-8 object-contain" />
        ) : (
          <div className="flex items-center gap-3">
            <img src={wefundLogo} alt="WeFund" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold text-foreground">WeFund CMS</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
              "hover:bg-muted/50",
              isActive 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className={cn("h-5 w-5 flex-shrink-0", collapsed && "mx-auto")} />
            {!collapsed && <span className="font-medium">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-border p-3 space-y-2">
        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-center"
          onClick={onToggle}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>

        {/* Logout */}
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "w-full text-destructive hover:text-destructive hover:bg-destructive/10",
            collapsed ? "justify-center" : "justify-start"
          )}
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </aside>
  );
}
