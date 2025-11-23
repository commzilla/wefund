import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const AccountSelector = () => {
  const accountSizes = ["$10k", "$25k", "$50k", "$100k", "$200k"];
  
  return (
    <section id="objectives" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-0">
          {/* Left Column - Configure Challenge */}
          <Card className="bg-transparent border-0 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-3xl mb-6">Configure your Challenge</CardTitle>
              
              {/* Trader MT5 */}
              <div className="bg-blue-800/30 backdrop-blur-sm border border-blue-700/40 rounded-xl p-4 flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">5️⃣</span>
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Trader</div>
                  <div className="text-white font-semibold text-lg">MT5</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Account Type */}
              <div>
                <h4 className="text-white font-semibold mb-3">Account Type</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="bg-blue-700 hover:bg-blue-600 text-white border-0">1 Step - HFT</Button>
                  <Button variant="outline" className="bg-transparent border-blue-700/40 text-white hover:bg-blue-800/30">2 Step</Button>
                </div>
              </div>

              {/* Account Size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold">Account Size</h4>
                  <span className="text-xs px-2 py-1 bg-blue-700/40 rounded-full text-muted-foreground">Most popular</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  <Button className="bg-blue-700 hover:bg-blue-600 text-white border-0">$10k</Button>
                  <Button variant="outline" className="bg-transparent border-blue-700/40 text-white hover:bg-blue-800/30">$25k</Button>
                  <Button variant="outline" className="bg-transparent border-blue-700/40 text-white hover:bg-blue-800/30">$50k</Button>
                  <Button variant="outline" className="bg-transparent border-blue-700/40 text-white hover:bg-blue-800/30">$100k</Button>
                  <Button variant="outline" className="bg-transparent border-blue-700/40 text-white hover:bg-blue-800/30">$200k</Button>
                </div>
              </div>

              {/* Start Challenge Button */}
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold">
                Start Challenge
              </Button>

              {/* Payment Icons */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <div className="w-10 h-8 bg-white rounded flex items-center justify-center text-xs">GPay</div>
                <div className="w-10 h-8 bg-black rounded flex items-center justify-center text-white text-xs">Pay</div>
                <div className="w-10 h-8 bg-blue-900 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                <div className="w-10 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full"></div>
                <div className="w-10 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-xs">P</div>
                <div className="w-10 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">◆</div>
                <div className="w-10 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs">T</div>
                <div className="w-10 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">B</div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Table */}
          <div className="bg-transparent border-l border-primary/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/40 hover:bg-transparent">
                  <TableHead className="text-muted-foreground font-normal text-base py-5">Category</TableHead>
                  <TableHead className="text-muted-foreground font-normal text-base text-right py-5">Phase 1</TableHead>
                  <TableHead className="text-primary font-normal text-base text-right py-5">Live Trader</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-border/40 hover:bg-transparent">
                  <TableCell className="text-muted-foreground py-5">Trading Period</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">Unlimited</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">Unlimited</TableCell>
                </TableRow>
                <TableRow className="border-border/40 hover:bg-transparent">
                  <TableCell className="text-muted-foreground py-5">Minimum Trading Days</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">0 days</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">Unlimited</TableCell>
                </TableRow>
                <TableRow className="border-border/40 hover:bg-transparent">
                  <TableCell className="text-muted-foreground py-5">Maximum Daily Loss (4%)</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">$400</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">$400</TableCell>
                </TableRow>
                <TableRow className="border-border/40 hover:bg-transparent">
                  <TableCell className="text-muted-foreground py-5">Maximum Loss (8%)</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">$800</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">$800</TableCell>
                </TableRow>
                <TableRow className="border-border/40 hover:bg-transparent">
                  <TableCell className="text-muted-foreground py-5">Profit Target (10%)</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">$1,000</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">N/A</TableCell>
                </TableRow>
                <TableRow className="border-b-2 border-primary hover:bg-transparent">
                  <TableCell className="text-muted-foreground py-5">Price</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">$147</TableCell>
                  <TableCell className="text-muted-foreground text-right py-5">Free</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <div className="px-6 py-4 flex items-center justify-between flex-wrap gap-3">
              <span className="text-sm text-foreground">See all trading rules</span>
              <div className="flex items-center gap-2 text-sm">
                <span>💎</span>
                <span className="text-foreground">Bi-weekly payout and <span className="text-primary">90% profit split</span> add-ons available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <span>🔧</span>
                <span>Profit Split</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
