import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unlock the <span className="text-primary">$7 trillion</span> a day market with WeFund
            </h2>
            <Button size="lg" className="mt-4">
              Get Funded Today
            </Button>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold">Community & Support</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">General Support</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Get in touch with questions about your account.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://support.we-fund.com/en/" target="_blank" rel="noopener noreferrer">
                      Get in Touch
                    </a>
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Join Discord</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Join our the most transparent community out there. Don't miss any of our future
                    updates and discount codes.
                  </p>
                  <Button asChild>
                    <a href="https://discord.gg/wefund" target="_blank" rel="noopener noreferrer">
                      Join Discord
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WeFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
