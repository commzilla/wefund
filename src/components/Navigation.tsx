import { Button } from "@/components/ui/button";
import logo from "@/assets/wefund-logo.png";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <span className="text-xs lg:text-sm text-foreground font-medium">EN</span>
            </div>
            <Button variant="outline" size="sm" className="border-border/50 hover:bg-card/50 text-foreground text-xs lg:text-sm">
              Login
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 text-xs lg:text-sm">
              Dashboard
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-base font-medium text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#affiliates" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Affiliates
              </a>
              <a href="#support" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Support
              </a>
              <a href="#faq" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                FAQ
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-card/50 backdrop-blur-sm rounded border border-border/50 w-fit">
                  <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-5 h-3.5" />
                  <span className="text-sm text-foreground font-medium">EN</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-border/50 hover:bg-card/50 text-foreground flex-1">
                    Login
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 flex-1">
                    Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
