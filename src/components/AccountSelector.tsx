import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

            <div className="bg-[#1a2332] border border-border/40 rounded-2xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/40 hover:bg-transparent">
                    <TableHead className="text-muted-foreground font-medium">Category</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">Phase 1</TableHead>
                    <TableHead className="text-primary font-medium text-center">Live Trader</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-border/40 hover:bg-transparent">
                    <TableCell className="text-muted-foreground">Trading Period</TableCell>
                    <TableCell className="text-foreground text-center">Unlimited</TableCell>
                    <TableCell className="text-foreground text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow className="border-border/40 hover:bg-transparent">
                    <TableCell className="text-muted-foreground">Minimum Trading Days</TableCell>
                    <TableCell className="text-foreground text-center">0 days</TableCell>
                    <TableCell className="text-foreground text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow className="border-border/40 hover:bg-transparent">
                    <TableCell className="text-muted-foreground">Maximum Daily Loss (4%)</TableCell>
                    <TableCell className="text-foreground text-center">$400</TableCell>
                    <TableCell className="text-foreground text-center">$400</TableCell>
                  </TableRow>
                  <TableRow className="border-border/40 hover:bg-transparent">
                    <TableCell className="text-muted-foreground">Maximum Loss (8%)</TableCell>
                    <TableCell className="text-foreground text-center">$800</TableCell>
                    <TableCell className="text-foreground text-center">$800</TableCell>
                  </TableRow>
                  <TableRow className="border-border/40 hover:bg-transparent">
                    <TableCell className="text-muted-foreground">Profit Target (10%)</TableCell>
                    <TableCell className="text-foreground text-center">$1,000</TableCell>
                    <TableCell className="text-foreground text-center">N/A</TableCell>
                  </TableRow>
                  <TableRow className="border-b-2 border-primary/60 hover:bg-transparent">
                    <TableCell className="text-muted-foreground">Price</TableCell>
                    <TableCell className="text-foreground text-center">$147</TableCell>
                    <TableCell className="text-foreground text-center">Free</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <div className="p-6 border-t border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">See all trading rules</span>
                  <span className="text-sm">💎 Bi-weekly payout and <span className="text-primary">90% profit split</span> add-ons available</span>
                </div>
                <span className="text-sm">🔧 Profit Split</span>
              </div>
            </div>

            <Button className="w-full" size="lg">Start Challenge</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
