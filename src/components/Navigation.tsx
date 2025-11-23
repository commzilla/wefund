import { Button } from "@/components/ui/button";
import logo from "@/assets/wefund-logo.png";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border/50" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center">
              <img src={logo} alt="WeFund" className="h-8" />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Home
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#affiliates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Affiliates
              </a>
              <a href="#support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card/50 backdrop-blur-sm rounded border border-border/50">
              <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-5 h-3.5" />
              <span className="text-sm text-foreground font-medium">EN</span>
            </div>
            <Button variant="outline" size="sm" className="border-border/50 hover:bg-card/50 text-foreground">
              Login
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};