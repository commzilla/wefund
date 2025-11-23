import { Button } from "@/components/ui/button";
import logo from "@/assets/wefund-logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <img src={logo} alt="WeFund" className="h-6" />
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#affiliates" className="text-muted-foreground hover:text-foreground transition-colors">
                Affiliates
              </a>
              <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Login
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
