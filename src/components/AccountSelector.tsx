import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import paymentsImage from "@/assets/payments.png";
import mt5Logo from "@/assets/metatrader5-logo.webp";

export const AccountSelector = () => {
  return (
    <section id="objectives" className="py-24 px-4 bg-[#020408] relative overflow-hidden">
      {/* Multi-layer background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(6,182,212,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(6,182,212,0.08)_0%,transparent_40%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-0">
          {/* Left Column - Configure Challenge with Premium Gloss Effect */}
          <div className="relative bg-gradient-to-b from-[#0d1a2d] via-[#0a1525] to-[#071018] border border-cyan-400/30 rounded-[28px] p-8 shadow-[0_0_80px_rgba(6,182,212,0.12),0_4px_60px_rgba(0,0,0,0.4)] overflow-hidden">
            {/* Apple Gloss - Primary highlight arc */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent rounded-t-[28px] pointer-events-none" />
            {/* Secondary inner edge glow */}
            <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.3)] pointer-events-none" />
            {/* Cyan accent glow at top */}
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-white text-[28px] font-bold mb-8 tracking-tight">Configure your Challenge</h2>
              
              {/* Trader MT5 */}
              <div className="relative bg-gradient-to-r from-[#0c1826] to-[#0e1c2e] border border-cyan-500/25 rounded-2xl p-4 flex items-center gap-4 mb-7 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl pointer-events-none" />
                <img src={mt5Logo} alt="MT5" className="h-12 w-auto relative z-10" />
                <div className="flex flex-col relative z-10">
                  <span className="text-cyan-400/70 text-xs font-medium">Trader</span>
                  <span className="text-white text-lg font-bold">MT5</span>
                </div>
              </div>

              {/* Account Type */}
              <div className="mb-7">
                <h4 className="text-slate-400 font-medium mb-3 text-sm tracking-wide">Account Type</h4>
                <div className="bg-[#111c2e] rounded-xl p-1.5 grid grid-cols-3 gap-1.5 border border-slate-700/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                  <Button className="relative bg-gradient-to-b from-cyan-500/25 to-cyan-600/15 hover:from-cyan-500/35 hover:to-cyan-600/25 text-white border border-cyan-400/40 rounded-xl py-5 font-semibold text-sm shadow-[0_0_20px_rgba(6,182,212,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-200">
                    1 Step - Algo
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[9px] px-2.5 py-0.5 bg-slate-700/80 text-slate-300 rounded-full whitespace-nowrap font-medium border border-slate-600/50 shadow-sm">
                      Coming Soon
                    </span>
                    <Button className="w-full bg-[#0a1220] hover:bg-[#0f1a2c] text-slate-500 border border-transparent rounded-xl py-5 font-semibold text-sm transition-all duration-200">
                      1 Step Pro
                    </Button>
                  </div>
                  <Button className="bg-[#0a1220] hover:bg-[#0f1a2c] text-slate-500 border border-transparent rounded-xl py-5 font-semibold text-sm transition-all duration-200">
                    2 Step
                  </Button>
                </div>
              </div>

              {/* Account Size */}
              <div className="mb-8">
                <h4 className="text-slate-400 font-medium mb-3 text-sm tracking-wide">Account Size</h4>
                <div className="bg-[#111c2e] rounded-xl p-1.5 grid grid-cols-5 gap-1 relative border border-slate-700/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                  <Button className="bg-[#0a1220] hover:bg-[#0f1a2c] text-slate-500 border border-transparent rounded-xl py-5 px-1 font-semibold text-sm transition-all duration-200">
                    $10k
                  </Button>
                  <Button className="bg-[#0a1220] hover:bg-[#0f1a2c] text-slate-500 border border-transparent rounded-xl py-5 px-1 font-semibold text-sm transition-all duration-200">
                    $25k
                  </Button>
                  <Button className="bg-[#0a1220] hover:bg-[#0f1a2c] text-slate-500 border border-transparent rounded-xl py-5 px-1 font-semibold text-sm transition-all duration-200">
                    $50k
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[9px] px-2.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full whitespace-nowrap font-medium border border-cyan-400/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                      Most popular
                    </span>
                    <Button className="w-full relative bg-gradient-to-b from-cyan-500/25 to-cyan-600/15 hover:from-cyan-500/35 hover:to-cyan-600/25 text-white border border-cyan-400/40 rounded-xl py-5 px-1 font-semibold text-sm shadow-[0_0_20px_rgba(6,182,212,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-200">
                      $100k
                    </Button>
                  </div>
                  <Button className="bg-[#0a1220] hover:bg-[#0f1a2c] text-slate-500 border border-transparent rounded-xl py-5 px-1 font-semibold text-sm transition-all duration-200">
                    $200k
                  </Button>
                </div>
              </div>

              {/* CTA Button with Premium Glow */}
              <div className="relative mb-7 group">
                {/* Animated outer glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/40 via-cyan-400/60 to-cyan-500/40 rounded-2xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-cyan-400/30 rounded-xl blur-md" />
                <Button className="relative w-full bg-gradient-to-b from-[#0a1422] via-[#081220] to-[#060e1a] hover:from-[#0c1828] hover:to-[#081420] text-white py-8 text-lg font-bold rounded-xl uppercase tracking-widest border border-cyan-400/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_0_30px_rgba(6,182,212,0.08)] transition-all duration-300 overflow-hidden">
                  {/* Inner gloss */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-xl pointer-events-none" />
                  <span className="relative z-10">GET FUNDED NOW</span>
                </Button>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center justify-center opacity-90">
                <img src={paymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[360px]" />
              </div>
            </div>
          </div>

          {/* Right Column - Table with matching premium style */}
          <div className="relative bg-gradient-to-b from-[#0d1a2d] via-[#0a1525] to-[#071018] border border-cyan-400/15 border-l-0 rounded-r-[28px] overflow-hidden shadow-[0_4px_60px_rgba(0,0,0,0.3)]">
            {/* Gloss effect */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
            
            <Table className="relative z-10">
              <TableHeader>
                <TableRow className="border-slate-700/20 hover:bg-transparent">
                  <TableHead className="text-slate-400 font-medium text-sm py-6 pl-8">Category</TableHead>
                  <TableHead className="text-slate-400 font-medium text-sm text-center py-6">Phase 1</TableHead>
                  <TableHead className="text-cyan-400 font-medium text-sm text-center py-6 pr-8">Live Trader</TableHead>
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
                    className={`border-slate-700/15 hover:bg-cyan-500/[0.03] transition-colors duration-200 ${row.isLast ? 'border-b-2 border-cyan-500/15' : ''}`}
                  >
                    <TableCell className="text-slate-300 py-5 pl-8 font-medium text-sm">{row.label}</TableCell>
                    <TableCell className="text-slate-400 text-center py-5 text-sm">{row.p1}</TableCell>
                    <TableCell className="text-slate-400 text-center py-5 pr-8 text-sm">{row.live}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="relative px-8 py-6 flex items-center justify-between flex-wrap gap-4 bg-gradient-to-r from-[#050a14] via-[#060c18] to-[#050a14] border-t border-slate-700/20">
              <span className="text-white font-medium text-sm">See all trading rules</span>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500">bi-weekly payout and</span>
                <span className="text-cyan-400 font-medium">90% profit split</span>
                <span className="text-slate-500">add-ons available</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
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
