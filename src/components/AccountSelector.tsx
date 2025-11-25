import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import paymentsImage from "@/assets/payments.png";
import mt5LogoNew from "@/assets/mt5-logo-new.png";
export const AccountSelector = () => {
  const accountSizes = ["$10k", "$25k", "$50k", "$100k", "$200k"];
  return <section id="objectives" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-0">
          {/* Left Column - Configure Challenge */}
          <div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-950/40 backdrop-blur-sm border border-blue-700/30 rounded-3xl p-8">
            <h2 className="text-white text-3xl font-bold mb-8">Configure your Challenge</h2>
            
            {/* Trader MT5 */}
            <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-600/40 rounded-2xl p-5 flex items-center gap-4 mb-8">
              <img src={mt5LogoNew} alt="MT5" className="h-12 w-auto" />
              
            </div>

            {/* Account Type */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4 text-lg">Account Type</h4>
              <div className="bg-black/40 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-2 grid grid-cols-2 gap-2">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white border-0 rounded-xl py-6 font-semibold">
                  1 Step - HFT
                </Button>
                <Button variant="ghost" className="bg-transparent text-white hover:bg-blue-800/30 rounded-xl py-6 font-semibold">
                  2 Step
                </Button>
              </div>
            </div>

            {/* Account Size */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold text-lg">Account Size</h4>
                <span className="text-xs px-3 py-1.5 bg-blue-700/50 border border-blue-600/40 rounded-full text-gray-300">
                  Most popular
                </span>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-2 grid grid-cols-5 gap-2">
                <Button variant="ghost" className="bg-transparent text-white hover:bg-blue-800/30 rounded-xl py-6 font-semibold">
                  $10k
                </Button>
                <Button variant="ghost" className="bg-transparent text-white hover:bg-blue-800/30 rounded-xl py-6 font-semibold">
                  $25k
                </Button>
                <Button variant="ghost" className="bg-transparent text-white hover:bg-blue-800/30 rounded-xl py-6 font-semibold">
                  $50k
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white border-0 rounded-xl py-6 font-semibold relative">
                  $100k
                </Button>
                <Button variant="ghost" className="bg-transparent text-white hover:bg-blue-800/30 rounded-xl py-6 font-semibold">
                  $200k
                </Button>
              </div>
            </div>

            {/* Start Challenge Button */}
            <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white py-7 text-lg font-bold rounded-2xl mb-6">
              Start Challenge
            </Button>

            {/* Payment Icons */}
            <div className="flex items-center justify-center">
              <img src={paymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[380px]" />
            </div>
          </div>

          {/* Right Column - Table */}
          <div className="bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-700/30 rounded-3xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700/40 hover:bg-transparent">
                  <TableHead className="text-gray-400 font-medium text-base py-6 pl-8">Category</TableHead>
                  <TableHead className="text-gray-400 font-medium text-base text-center py-6">Phase 1</TableHead>
                  <TableHead className="text-cyan-400 font-medium text-base text-center py-6 pr-8">Live Trader</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-700/40 hover:bg-slate-800/20">
                  <TableCell className="text-gray-300 py-5 pl-8 font-medium">Trading Period</TableCell>
                  <TableCell className="text-gray-400 text-center py-5">Unlimited</TableCell>
                  <TableCell className="text-gray-400 text-center py-5 pr-8">Unlimited</TableCell>
                </TableRow>
                <TableRow className="border-slate-700/40 hover:bg-slate-800/20">
                  <TableCell className="text-gray-300 py-5 pl-8 font-medium">Minimum Trading Days</TableCell>
                  <TableCell className="text-gray-400 text-center py-5">0 days</TableCell>
                  <TableCell className="text-gray-400 text-center py-5 pr-8">Unlimited</TableCell>
                </TableRow>
                <TableRow className="border-slate-700/40 hover:bg-slate-800/20">
                  <TableCell className="text-gray-300 py-5 pl-8 font-medium">Maximum Daily Loss (4%)</TableCell>
                  <TableCell className="text-gray-400 text-center py-5">$4,000</TableCell>
                  <TableCell className="text-gray-400 text-center py-5 pr-8">$4,000</TableCell>
                </TableRow>
                <TableRow className="border-slate-700/40 hover:bg-slate-800/20">
                  <TableCell className="text-gray-300 py-5 pl-8 font-medium">Maximum Loss (8%)</TableCell>
                  <TableCell className="text-gray-400 text-center py-5">$8,000</TableCell>
                  <TableCell className="text-gray-400 text-center py-5 pr-8">$8,000</TableCell>
                </TableRow>
                <TableRow className="border-slate-700/40 hover:bg-slate-800/20">
                  <TableCell className="text-gray-300 py-5 pl-8 font-medium">Profit Target (10%)</TableCell>
                  <TableCell className="text-gray-400 text-center py-5">$10,000</TableCell>
                  <TableCell className="text-gray-400 text-center py-5 pr-8">N/A</TableCell>
                </TableRow>
                <TableRow className="border-b-2 border-slate-600/60 hover:bg-slate-800/20">
                  <TableCell className="text-gray-300 py-5 pl-8 font-medium">Price</TableCell>
                  <TableCell className="text-gray-400 text-center py-5">$547</TableCell>
                  <TableCell className="text-gray-400 text-center py-5 pr-8">Free</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <div className="px-8 py-6 flex items-center justify-between flex-wrap gap-4 bg-slate-900/40">
              <span className="text-white font-medium">See all trading rules</span>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">bi-weekly payout and</span>
                <span className="text-cyan-400 font-medium">90% profit split</span>
                <span className="text-gray-400">add-ons available</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">⚡</span>
                <span className="text-white">Profit Splits of up to</span>
                <span className="text-cyan-400 font-medium">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};