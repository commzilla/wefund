import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import paymentsImage from "@/assets/payments.png";
import mt5Logo from "@/assets/metatrader5-logo.webp";

export const AccountSelector = () => {
  return (
    <section id="objectives" className="py-24 px-4 bg-[#030712] relative overflow-hidden">
      {/* Stars background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-white/40 rounded-full" />
        <div className="absolute top-32 right-1/3 w-0.5 h-0.5 bg-white/30 rounded-full" />
        <div className="absolute top-40 left-1/2 w-1 h-1 bg-white/20 rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-0.5 h-0.5 bg-white/40 rounded-full" />
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-white/30 rounded-full" />
      </div>
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-4">
          
          {/* Left Column - Configure Challenge */}
          <div className="relative rounded-[24px] bg-gradient-to-b from-[#0f172a] to-[#0a1222] border border-slate-700/40 p-8 overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
            
            {/* Subtle top glow */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-600/[0.08] to-transparent rounded-t-[24px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-white text-[26px] font-semibold mb-8">Configure your Challenge</h2>
              
              {/* MT5 Card */}
              <div className="relative rounded-2xl bg-gradient-to-r from-[#0c1526] to-[#101c30] border border-slate-600/30 p-4 flex items-center gap-4 mb-7">
                <img src={mt5Logo} alt="MT5" className="h-11 w-auto" />
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">Trader</span>
                  <span className="text-white text-lg font-semibold">MT5</span>
                </div>
              </div>

              {/* Account Type */}
              <div className="mb-7">
                <h4 className="text-slate-400 text-[13px] font-medium mb-3 uppercase tracking-wider">Account Type</h4>
                <div className="rounded-xl bg-[#0c1424] border border-slate-700/30 p-1.5 grid grid-cols-3 gap-1.5">
                  {/* Selected */}
                  <Button className="bg-gradient-to-b from-cyan-500/20 to-cyan-600/10 text-white border border-cyan-500/40 rounded-xl py-5 font-medium text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    1 Step - Algo
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 bg-slate-700/80 text-slate-300 rounded-full whitespace-nowrap font-medium border border-slate-600/40">
                      Coming Soon
                    </span>
                    <Button className="w-full bg-[#080e18] hover:bg-[#0c1420] text-slate-500 border border-transparent rounded-xl py-5 font-medium text-sm transition-colors">
                      1 Step Pro
                    </Button>
                  </div>
                  <Button className="bg-[#080e18] hover:bg-[#0c1420] text-slate-500 border border-transparent rounded-xl py-5 font-medium text-sm transition-colors">
                    2 Step
                  </Button>
                </div>
              </div>

              {/* Account Size */}
              <div className="mb-8">
                <h4 className="text-slate-400 text-[13px] font-medium mb-3 uppercase tracking-wider">Account Size</h4>
                <div className="rounded-xl bg-[#0c1424] border border-slate-700/30 p-1.5 grid grid-cols-5 gap-1">
                  <Button className="bg-[#080e18] hover:bg-[#0c1420] text-slate-500 border border-transparent rounded-xl py-5 px-0 font-medium text-sm transition-colors">
                    $10k
                  </Button>
                  <Button className="bg-[#080e18] hover:bg-[#0c1420] text-slate-500 border border-transparent rounded-xl py-5 px-0 font-medium text-sm transition-colors">
                    $25k
                  </Button>
                  <Button className="bg-[#080e18] hover:bg-[#0c1420] text-slate-500 border border-transparent rounded-xl py-5 px-0 font-medium text-sm transition-colors">
                    $50k
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full whitespace-nowrap font-medium border border-cyan-400/30">
                      Most popular
                    </span>
                    <Button className="w-full bg-gradient-to-b from-cyan-500/20 to-cyan-600/10 text-white border border-cyan-500/40 rounded-xl py-5 px-0 font-medium text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      $100k
                    </Button>
                  </div>
                  <Button className="bg-[#080e18] hover:bg-[#0c1420] text-slate-500 border border-transparent rounded-xl py-5 px-0 font-medium text-sm transition-colors">
                    $200k
                  </Button>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative mb-7 group">
                <div className="absolute -inset-1.5 bg-cyan-500/25 rounded-2xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <Button className="relative w-full bg-gradient-to-b from-[#0c1726] to-[#081018] text-white py-8 text-[17px] font-semibold rounded-xl uppercase tracking-[0.15em] border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-300">
                  GET FUNDED NOW
                </Button>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center justify-center">
                <img src={paymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[360px] opacity-80" />
              </div>
            </div>
          </div>

          {/* Right Column - Table */}
          <div className="relative rounded-[24px] bg-gradient-to-b from-[#0f172a] to-[#0a1222] border border-slate-700/40 overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.4)] flex flex-col">
            
            {/* Subtle top glow */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-600/[0.06] to-transparent rounded-t-[24px] pointer-events-none" />
              
            <Table className="relative z-10 flex-1">
              <TableHeader>
                <TableRow className="border-slate-700/25 hover:bg-transparent">
                  <TableHead className="text-slate-400 font-medium text-[13px] py-6 pl-8">Category</TableHead>
                  <TableHead className="text-slate-400 font-medium text-[13px] text-center py-6">Phase 1</TableHead>
                  <TableHead className="text-cyan-400 font-medium text-[13px] text-center py-6 pr-8">Live Trader</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { label: "Trading Period", p1: "Unlimited", live: "Unlimited" },
                  { label: "Minimum Trading Days", p1: "0 days", live: "Unlimited" },
                  { label: "Maximum Daily Loss (4%)", p1: "$4,000", live: "$4,000" },
                  { label: "Maximum Loss (8%)", p1: "$8,000", live: "$8,000" },
                  { label: "Profit Target (10%)", p1: "$10,000", live: "N/A" },
                  { label: "Price", p1: "$547", live: "Free", isLast: true },
                ].map((row, i) => (
                  <TableRow 
                    key={i} 
                    className={`border-slate-700/20 hover:bg-slate-800/20 transition-colors ${row.isLast ? 'border-b border-slate-600/25' : ''}`}
                  >
                    <TableCell className="text-slate-300 py-5 pl-8 font-medium text-[13px]">{row.label}</TableCell>
                    <TableCell className="text-slate-400 text-center py-5 text-[13px]">{row.p1}</TableCell>
                    <TableCell className="text-slate-400 text-center py-5 pr-8 text-[13px]">{row.live}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Footer */}
            <div className="relative px-8 py-6 bg-[#080e18] border-t border-slate-700/25">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-white font-medium text-[13px]">See all trading rules</span>
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="text-slate-500">bi-weekly payout and</span>
                  <span className="text-cyan-400 font-medium">90% profit split</span>
                  <span className="text-slate-500">add-ons available</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[13px] mt-3">
                <span className="text-cyan-400">⚡</span>
                <span className="text-white">Profit Splits of up to</span>
                <span className="text-cyan-400 font-semibold">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
