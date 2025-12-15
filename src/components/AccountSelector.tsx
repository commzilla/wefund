import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import paymentsImage from "@/assets/payments.png";
import mt5Logo from "@/assets/metatrader5-logo.webp";

export const AccountSelector = () => {
  return (
    <section id="objectives" className="py-20 px-4 bg-[#030508] relative overflow-hidden">
      {/* Effetto glow sfumato sullo sfondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_60%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-0">
          {/* Left Column - Configure Challenge with Apple Gloss Effect */}
          <div className="relative bg-gradient-to-b from-[#0a1628] via-[#0c1a30] to-[#081420] border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_60px_rgba(6,182,212,0.15),0_0_100px_rgba(6,182,212,0.08)] overflow-hidden">
            {/* Apple Gloss Effect - Top highlight */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent rounded-t-3xl pointer-events-none" />
            {/* Inner glow edge */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-white text-3xl font-bold mb-8">Configure your Challenge</h2>
              
              {/* Trader MT5 */}
              <div className="bg-gradient-to-r from-[#0d1a2e] to-[#0f1e35] border border-cyan-500/30 rounded-2xl p-4 flex items-center gap-4 mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <img src={mt5Logo} alt="MT5" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs">Trader</span>
                  <span className="text-white text-lg font-bold">MT5</span>
                </div>
              </div>

              {/* Account Type */}
              <div className="mb-8">
                <h4 className="text-slate-400 font-medium mb-3 text-sm">Account Type</h4>
                <div className="bg-[#1a2540] rounded-xl p-1.5 grid grid-cols-3 gap-1.5 border border-slate-600/30">
                  <Button className="bg-cyan-500/20 hover:bg-cyan-500/30 text-white border border-cyan-400/50 rounded-lg py-5 font-semibold text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    1 Step - Algo
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 bg-slate-600/60 text-slate-300 rounded-full whitespace-nowrap font-medium">
                      Coming Soon
                    </span>
                    <Button className="w-full bg-[#0f172a] hover:bg-[#1a2744] text-slate-400 border-0 rounded-lg py-5 font-semibold text-sm shadow-none">
                      1 Step Pro
                    </Button>
                  </div>
                  <Button className="bg-[#0f172a] hover:bg-[#1a2744] text-slate-400 border-0 rounded-lg py-5 font-semibold text-sm shadow-none">
                    2 Step
                  </Button>
                </div>
              </div>

              {/* Account Size */}
              <div className="mb-8">
                <h4 className="text-slate-400 font-medium mb-3 text-sm">Account Size</h4>
                <div className="bg-[#1a2540] rounded-xl p-1.5 grid grid-cols-5 gap-1 relative border border-slate-600/30">
                  <Button className="bg-[#0f172a] hover:bg-[#1a2744] text-slate-400 border-0 rounded-lg py-5 px-2 font-semibold text-sm shadow-none">
                    $10k
                  </Button>
                  <Button className="bg-[#0f172a] hover:bg-[#1a2744] text-slate-400 border-0 rounded-lg py-5 px-2 font-semibold text-sm shadow-none">
                    $25k
                  </Button>
                  <Button className="bg-[#0f172a] hover:bg-[#1a2744] text-slate-400 border-0 rounded-lg py-5 px-2 font-semibold text-sm shadow-none">
                    $50k
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 bg-slate-600/60 text-slate-300 rounded-full whitespace-nowrap font-medium">
                      Most popular
                    </span>
                    <Button className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-white border border-cyan-400/50 rounded-lg py-5 px-2 font-semibold text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      $100k
                    </Button>
                  </div>
                  <Button className="bg-[#0f172a] hover:bg-[#1a2744] text-slate-400 border-0 rounded-lg py-5 px-2 font-semibold text-sm shadow-none">
                    $200k
                  </Button>
                </div>
              </div>

              {/* Start Challenge Button with Intense Cyan Glow */}
              <div className="relative mb-6">
                {/* Outer glow layer */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-cyan-400/60 to-cyan-500/50 rounded-2xl blur-xl opacity-60" />
                <Button className="relative w-full bg-gradient-to-b from-[#0c1a2e] to-[#081422] hover:from-[#0e1e36] hover:to-[#0a1828] text-white py-7 text-lg font-bold rounded-xl uppercase tracking-wider border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_0_40px_rgba(6,182,212,0.1)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-300">
                  GET FUNDED NOW
                </Button>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center justify-center">
                <img src={paymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[380px]" />
              </div>
            </div>
          </div>

          {/* Right Column - Table with matching style */}
          <div className="relative bg-gradient-to-b from-[#0a1628] via-[#0c1a30] to-[#081420] border border-cyan-400/20 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.08)]">
            {/* Apple Gloss Effect */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
            
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700/30 hover:bg-transparent">
                  <TableHead className="text-slate-400 font-medium text-base py-6 pl-8">Category</TableHead>
                  <TableHead className="text-slate-400 font-medium text-base text-center py-6">Phase 1</TableHead>
                  <TableHead className="text-cyan-400 font-medium text-base text-center py-6 pr-8">Live Trader</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-700/20 hover:bg-cyan-500/5">
                  <TableCell className="text-slate-300 py-5 pl-8 font-medium">Trading Period</TableCell>
                  <TableCell className="text-slate-400 text-center py-5">Unlimited</TableCell>
                  <TableCell className="text-slate-400 text-center py-5 pr-8">Unlimited</TableCell>
                </TableRow>
                <TableRow className="border-slate-700/20 hover:bg-cyan-500/5">
                  <TableCell className="text-slate-300 py-5 pl-8 font-medium">Minimum Trading Days</TableCell>
                  <TableCell className="text-slate-400 text-center py-5">0 days</TableCell>
                  <TableCell className="text-slate-400 text-center py-5 pr-8">Unlimited</TableCell>
                </TableRow>
                <TableRow className="border-slate-700/20 hover:bg-cyan-500/5">
                  <TableCell className="text-slate-300 py-5 pl-8 font-medium">Maximum Daily Loss (4%)</TableCell>
                  <TableCell className="text-slate-400 text-center py-5">$4,000</TableCell>
                  <TableCell className="text-slate-400 text-center py-5 pr-8">$4,000</TableCell>
                </TableRow>
                <TableRow className="border-slate-700/20 hover:bg-cyan-500/5">
                  <TableCell className="text-slate-300 py-5 pl-8 font-medium">Maximum Loss (8%)</TableCell>
                  <TableCell className="text-slate-400 text-center py-5">$8,000</TableCell>
                  <TableCell className="text-slate-400 text-center py-5 pr-8">$8,000</TableCell>
                </TableRow>
                <TableRow className="border-slate-700/20 hover:bg-cyan-500/5">
                  <TableCell className="text-slate-300 py-5 pl-8 font-medium">Profit Target (10%)</TableCell>
                  <TableCell className="text-slate-400 text-center py-5">$10,000</TableCell>
                  <TableCell className="text-slate-400 text-center py-5 pr-8">N/A</TableCell>
                </TableRow>
                <TableRow className="border-b-2 border-cyan-500/20 hover:bg-cyan-500/5">
                  <TableCell className="text-slate-300 py-5 pl-8 font-medium">Price</TableCell>
                  <TableCell className="text-slate-400 text-center py-5">$547</TableCell>
                  <TableCell className="text-slate-400 text-center py-5 pr-8">Free</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <div className="px-8 py-6 flex items-center justify-between flex-wrap gap-4 bg-gradient-to-r from-[#060c18] to-[#081020]">
              <span className="text-white font-medium">See all trading rules</span>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">bi-weekly payout and</span>
                <span className="text-cyan-400 font-medium">90% profit split</span>
                <span className="text-slate-500">add-ons available</span>
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
