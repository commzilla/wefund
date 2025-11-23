import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AccountSelector = () => {
  const accountSizes = ["$10k", "$25k", "$50k", "$100k", "$200k"];
  
  return (
    <section id="objectives" className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Funded with the Most Trusted Prop Firm
          </h2>
          <h3 className="text-2xl text-muted-foreground">Configure your Challenge</h3>
        </div>

        <Card className="max-w-4xl mx-auto border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">MT5</span>
              </div>
              <CardTitle>Trader Account Type</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">Account Type</h4>
              <div className="flex gap-3">
                <Button variant="default">1 Step - HFT</Button>
                <Button variant="outline">2 Step</Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Account Size</h4>
              <div className="flex flex-wrap gap-3">
                {accountSizes.map((size) => (
                  <Button key={size} variant={size === "$100k" ? "default" : "outline"}>
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phase 1</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phase 2</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Min Trading Days</div>
                  <div className="font-semibold">0 days</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Price</div>
                  <div className="font-semibold text-primary">$547</div>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maximum Daily Loss (4%)</span>
                  <span className="font-semibold">$4,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maximum Loss (8%)</span>
                  <span className="font-semibold">$8,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Profit Target (10%)</span>
                  <span className="font-semibold">$10,000</span>
                </div>
              </div>

              <ul className="space-y-2 pt-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">Bi-weekly payout and 90% profit split add-ons available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">Profit Splits of up to 100%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">Get Funded up to $400k</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">Payouts on demand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">24/7 Support</span>
                </li>
              </ul>
            </div>

            <Button className="w-full" size="lg">Start Challenge</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
