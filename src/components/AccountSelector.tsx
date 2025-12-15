import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import paymentsImage from "@/assets/payments.png";
import mt5Logo from "@/assets/metatrader5-logo.webp";

export const AccountSelector = () => {
  return (
    <section id="objectives" className="py-24 px-4 bg-[#010409] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-0">
          
          {/* Left Column - Apple Glass Card */}
          <div className="relative rounded-[32px] p-[1px] bg-gradient-to-b from-slate-500/30 via-slate-600/10 to-slate-800/20">
            {/* Glass card inner */}
            <div className="relative bg-gradient-to-b from-[#12192a] to-[#0a0f1a] rounded-[31px] p-8 overflow-hidden">
              
              {/* Apple Gloss - Top reflection band */}
              <div className="absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-white/10 via-white/[0.02] to-transparent rounded-t-[31px] pointer-events-none" />
              
              {/* Subtle edge highlight */}
              <div className="absolute inset-x-4 top-2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-white text-[26px] font-semibold mb-8">Configure your Challenge</h2>
                
                {/* MT5 Card */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/30 to-cyan-600/10 mb-7">
                  <div className="relative bg-gradient-to-b from-[#0f1724] to-[#0b1219] rounded-2xl p-4 flex items-center gap-4 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent rounded-t-2xl pointer-events-none" />
                    <img src={mt5Logo} alt="MT5" className="h-11 w-auto relative z-10" />
                    <div className="flex flex-col relative z-10">
                      <span className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">Trader</span>
                      <span className="text-white text-lg font-semibold">MT5</span>
                    </div>
                  </div>
                </div>

                {/* Account Type */}
                <div className="mb-7">
                  <h4 className="text-slate-400 text-[13px] font-medium mb-3 uppercase tracking-wider">Account Type</h4>
                  <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-slate-600/30 to-slate-700/10">
                    <div className="bg-[#0d1520] rounded-2xl p-1.5 grid grid-cols-3 gap-1.5">
                      {/* Selected */}
                      <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-cyan-400/50 to-cyan-500/20">
                        <Button className="w-full bg-gradient-to-b from-[#122030] to-[#0d1825] text-white rounded-xl py-5 font-medium text-sm shadow-[0_0_24px_rgba(6,182,212,0.3)]">
                          <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-xl pointer-events-none" />
                          1 Step - Algo
                        </Button>
                      </div>
                      <div className="relative">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 bg-slate-700/90 text-slate-300 rounded-full whitespace-nowrap font-medium border border-slate-600/40">
                          Coming Soon
                        </span>
                        <Button className="w-full bg-[#080d15] hover:bg-[#0c1420] text-slate-500 rounded-xl py-5 font-medium text-sm transition-colors">
                          1 Step Pro
                        </Button>
                      </div>
                      <Button className="bg-[#080d15] hover:bg-[#0c1420] text-slate-500 rounded-xl py-5 font-medium text-sm transition-colors">
                        2 Step
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Account Size */}
                <div className="mb-8">
                  <h4 className="text-slate-400 text-[13px] font-medium mb-3 uppercase tracking-wider">Account Size</h4>
                  <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-slate-600/30 to-slate-700/10">
                    <div className="bg-[#0d1520] rounded-2xl p-1.5 grid grid-cols-5 gap-1">
                      <Button className="bg-[#080d15] hover:bg-[#0c1420] text-slate-500 rounded-xl py-5 px-0 font-medium text-sm transition-colors">
                        $10k
                      </Button>
                      <Button className="bg-[#080d15] hover:bg-[#0c1420] text-slate-500 rounded-xl py-5 px-0 font-medium text-sm transition-colors">
                        $25k
                      </Button>
                      <Button className="bg-[#080d15] hover:bg-[#0c1420] text-slate-500 rounded-xl py-5 px-0 font-medium text-sm transition-colors">
                        $50k
                      </Button>
                      <div className="relative">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full whitespace-nowrap font-medium border border-cyan-400/30">
                          Most popular
                        </span>
                        <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-cyan-400/50 to-cyan-500/20">
                          <Button className="w-full relative bg-gradient-to-b from-[#122030] to-[#0d1825] text-white rounded-xl py-5 px-0 font-medium text-sm shadow-[0_0_24px_rgba(6,182,212,0.3)]">
                            <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-xl pointer-events-none" />
                            $100k
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-[#080d15] hover:bg-[#0c1420] text-slate-500 rounded-xl py-5 px-0 font-medium text-sm transition-colors">
                        $200k
                      </Button>
                    </div>
                  </div>
                </div>

                {/* CTA Button with Apple Gloss */}
                <div className="relative mb-7 group">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-cyan-500/30 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-cyan-400/60 via-cyan-500/30 to-cyan-600/20">
                    <Button className="relative w-full bg-gradient-to-b from-[#0e1822] to-[#080e16] text-white py-8 text-[17px] font-semibold rounded-xl uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 hover:from-[#111d2a] hover:to-[#0a1018]">
                      {/* Gloss reflection */}
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] via-white/[0.03] to-transparent rounded-t-xl pointer-events-none" />
                      <span className="relative z-10">GET FUNDED NOW</span>
                    </Button>
                  </div>
                </div>

                {/* Payment Icons */}
                <div className="flex items-center justify-center">
                  <img src={paymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[360px] opacity-85" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Table */}
          <div className="relative rounded-r-[32px] p-[1px] pt-0 pb-0 pl-0 bg-gradient-to-b from-slate-500/20 via-slate-600/5 to-slate-800/10">
            <div className="relative bg-gradient-to-b from-[#10172a] to-[#090e18] rounded-r-[31px] overflow-hidden h-full">
              {/* Table gloss */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
              
              <Table className="relative z-10">
                <TableHeader>
                  <TableRow className="border-slate-700/15 hover:bg-transparent">
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
                      className={`border-slate-700/10 hover:bg-white/[0.015] transition-colors ${row.isLast ? 'border-b border-slate-600/20' : ''}`}
                    >
                      <TableCell className="text-slate-300 py-5 pl-8 font-medium text-[13px]">{row.label}</TableCell>
                      <TableCell className="text-slate-400 text-center py-5 text-[13px]">{row.p1}</TableCell>
                      <TableCell className="text-slate-400 text-center py-5 pr-8 text-[13px]">{row.live}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="relative px-8 py-6 flex items-center justify-between flex-wrap gap-4 bg-[#060a12]/80 backdrop-blur-sm">
                <span className="text-white font-medium text-[13px]">See all trading rules</span>
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="text-slate-500">bi-weekly payout and</span>
                  <span className="text-cyan-400 font-medium">90% profit split</span>
                  <span className="text-slate-500">add-ons available</span>
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <span className="text-cyan-400">⚡</span>
                  <span className="text-white">Profit Splits of up to</span>
                  <span className="text-cyan-400 font-semibold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
