import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import paymentsImage from "@/assets/payments.png";
import mt5LogoNew from "@/assets/mt5-logo-new.png";

export const AccountSelector = () => {
  return (
    <section id="objectives" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-0">
          {/* Left Column - Configure Challenge */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1a2d] border border-cyan-400/30 rounded-3xl p-8 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
            <h2 className="text-white text-3xl font-bold mb-8">Configure your Challenge</h2>
            
            {/* Trader MT5 */}
            <div className="bg-[#1a2942] border border-slate-600/40 rounded-2xl p-4 flex items-center gap-4 mb-6">
              <img src={mt5LogoNew} alt="MT5" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs">Trader</span>
                <span className="text-white text-lg font-bold">MT5</span>
              </div>
            </div>

            {/* Account Type */}
            <div className="mb-8">
              <h4 className="text-slate-400 font-medium mb-3 text-sm">Account Type</h4>
              <div className="bg-[#c8cdd4] rounded-2xl p-1.5 grid grid-cols-3 gap-1.5">
                <Button className="bg-[#1e293b] hover:bg-[#263344] text-white border-0 rounded-xl py-5 font-semibold text-sm">
                  1 Step - Algo
                </Button>
                <div className="relative">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] px-2.5 py-0.5 bg-[#9ca3af]/60 text-slate-600 rounded-full whitespace-nowrap">
                    Coming Soon
                  </span>
                  <Button className="w-full bg-[#e2e5e9] hover:bg-[#d1d5db] text-slate-600 border-0 rounded-xl py-5 font-semibold text-sm shadow-none">
                    1 Step Pro
                  </Button>
                </div>
                <Button className="bg-[#e2e5e9] hover:bg-[#d1d5db] text-slate-600 border-0 rounded-xl py-5 font-semibold text-sm shadow-none">
                  2 Step
                </Button>
              </div>
            </div>

            {/* Account Size */}
            <div className="mb-8">
              <h4 className="text-slate-400 font-medium mb-3 text-sm">Account Size</h4>
              <div className="bg-[#c8cdd4] rounded-2xl p-1.5 grid grid-cols-5 gap-1 relative">
                <Button className="bg-[#e2e5e9] hover:bg-[#d1d5db] text-slate-600 border-0 rounded-xl py-5 px-2 font-semibold text-sm shadow-none">
                  $10k
                </Button>
                <Button className="bg-[#e2e5e9] hover:bg-[#d1d5db] text-slate-600 border-0 rounded-xl py-5 px-2 font-semibold text-sm shadow-none">
                  $25k
                </Button>
                <Button className="bg-[#e2e5e9] hover:bg-[#d1d5db] text-slate-600 border-0 rounded-xl py-5 px-2 font-semibold text-sm shadow-none">
                  $50k
                </Button>
                <div className="relative">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] px-2.5 py-0.5 bg-[#9ca3af]/60 text-slate-600 rounded-full whitespace-nowrap">
                    Most popular
                  </span>
                  <Button className="w-full bg-[#1e293b] hover:bg-[#263344] text-white border-0 rounded-xl py-5 px-2 font-semibold text-sm">
                    $100k
                  </Button>
                </div>
                <Button className="bg-[#e2e5e9] hover:bg-[#d1d5db] text-slate-600 border-0 rounded-xl py-5 px-2 font-semibold text-sm shadow-none">
                  $200k
                </Button>
              </div>
            </div>

            {/* Start Challenge Button with Cyan Glow */}
            <Button className="w-full bg-[#0c1929] hover:bg-[#142236] text-white py-7 text-lg font-bold rounded-2xl mb-6 uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4),inset_0_0_60px_rgba(6,182,212,0.1)] border border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
              GET FUNDED NOW
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
    </section>
  );
};
