import { Button } from "@/components/ui/button";
import logo from "@/assets/wefund-logo.png";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, Home, Users, Headphones, HelpCircle, Globe, LogIn, LayoutDashboard } from "lucide-react";

const menuItems = [
  { title: "Home", href: "#home", icon: Home },
  { title: "Affiliates", href: "#affiliates", icon: Users },
  { title: "Support", href: "#support", icon: Headphones },
  { title: "FAQ", href: "#faq", icon: HelpCircle },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 lg:gap-10">
              <div className="flex items-center">
                <img src={logo} alt="WeFund" className="h-6 md:h-7" />
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                <a href="#home" className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Home
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a href="#affiliates" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Affiliates
                </a>
                <a href="#support" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </a>
                <a href="#faq" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <div className="flex items-center gap-2 px-2 lg:px-3 py-1.5 bg-card/50 backdrop-blur-sm rounded border border-border/50">
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 lg:w-5 h-3 lg:h-3.5" />
                <span className="text-xs lg:text-sm text-foreground font-medium">ENG</span>
              </div>
              <Button variant="outline" size="sm" className="border-border/50 hover:bg-card/50 text-foreground text-xs lg:text-sm">
                Login
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 text-xs lg:text-sm">
                Dashboard
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-card/50 backdrop-blur-sm rounded border border-border/50">
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 h-3" />
                <span className="text-xs text-foreground font-medium">ENG</span>
              </div>
              <button 
                className="p-2 text-foreground bg-card/50 backdrop-blur-sm rounded border border-border/50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col pt-20 px-6 pb-8 overflow-y-auto">
          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform ${
                  isMobileMenuOpen 
                    ? "translate-x-0 opacity-100" 
                    : "-translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          {/* Bottom Actions */}
          <div 
            className={`space-y-4 pt-6 border-t border-white/10 transition-all duration-500 ${
              isMobileMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {/* Language Selector */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Globe className="w-4 h-4 text-cyan-400" />
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-5 h-3.5" />
                <span className="text-sm text-white font-medium">English</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="h-14 border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn className="w-5 h-5 mr-2" />
                Login
              </Button>
              <Button 
                className="h-14 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 rounded-xl text-base font-semibold shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LayoutDashboard className="w-5 h-5 mr-2" />
                Dashboard
              </Button>
            </div>

            {/* Support Text */}
            <p className="text-center text-white/40 text-sm pt-2">
              Need help? <a href="#support" className="text-cyan-400 hover:underline" onClick={() => setIsMobileMenuOpen(false)}>Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
