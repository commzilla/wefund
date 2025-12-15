import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import paymentsImage from "@/assets/payments.png";
import mt5Logo from "@/assets/metatrader5-logo.webp";
import cardsCarouselBg from "@/assets/cards-carousel-bg-2.png";

export const AccountSelector = () => {
  return (
    <section id="objectives" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/40 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8">
          
          {/* Left Column - Configure Challenge */}
          <div className="relative p-[2px] rounded-[36px] bg-gradient-to-br from-cyan-400/60 via-cyan-500/40 via-30% to-slate-900/80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-900/40 to-cyan-400/50 blur-[1px]" />
            <div 
              className="relative h-full rounded-[34px] bg-gradient-to-br from-slate-900/98 via-slate-950/95 to-blue-950/90 backdrop-blur-sm px-6 py-6 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col"
              style={{
                backgroundImage: `url(${cardsCarouselBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            {/* Strong Black Overlay */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
            
            {/* Internal Stars Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white animate-pulse"
                  style={{
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.4 + 0.1,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 2 + 2}s`
                  }}
                />
              ))}
            </div>
            {/* Subtle Cyan/Blue Glows */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-white text-[26px] font-semibold mb-5">Configure your Challenge</h2>
              
              {/* MT5 Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-blue-950/40 border border-blue-500/20 p-3 flex items-center gap-4 mb-4">
                <img src={mt5Logo} alt="MT5" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">Trader</span>
                  <span className="text-white text-base font-semibold">MT5</span>
                </div>
              </div>

              {/* Account Type */}
              <div className="mb-4">
                <h4 className="text-slate-400 text-[12px] font-medium mb-2 uppercase tracking-wider">Account Type</h4>
                <div className="rounded-xl bg-slate-900/60 border border-blue-500/20 p-1.5 grid grid-cols-3 gap-1.5">
                  {/* Selected */}
                  <Button className="bg-gradient-to-b from-cyan-500/20 to-cyan-600/10 text-white border border-cyan-500/40 rounded-xl py-3 font-medium text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    1 Step - Algo
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] px-2 py-0.5 bg-slate-700/80 text-slate-300 rounded-full whitespace-nowrap font-medium border border-slate-600/40">
                      Coming Soon
                    </span>
                    <Button className="w-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-3 font-medium text-sm transition-colors">
                      1 Step Pro
                    </Button>
                  </div>
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-3 font-medium text-sm transition-colors">
                    2 Step
                  </Button>
                </div>
              </div>

              {/* Account Size */}
              <div className="mb-5">
                <h4 className="text-slate-400 text-[12px] font-medium mb-2 uppercase tracking-wider">Account Size</h4>
                <div className="rounded-xl bg-slate-900/60 border border-blue-500/20 p-1.5 grid grid-cols-5 gap-1">
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-3 px-0 font-medium text-sm transition-colors">
                    $10k
                  </Button>
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-3 px-0 font-medium text-sm transition-colors">
                    $25k
                  </Button>
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-3 px-0 font-medium text-sm transition-colors">
                    $50k
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full whitespace-nowrap font-medium border border-cyan-400/30">
                      Most popular
                    </span>
                    <Button className="w-full bg-gradient-to-b from-cyan-500/20 to-cyan-600/10 text-white border border-cyan-500/40 rounded-xl py-3 px-0 font-medium text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      $100k
                    </Button>
                  </div>
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-3 px-0 font-medium text-sm transition-colors">
                    $200k
                  </Button>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative mb-5 group mt-auto">
                <div className="absolute -inset-2 bg-cyan-500/25 rounded-2xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <Button className="relative w-full bg-gradient-to-b from-slate-800/80 to-slate-900/80 text-white py-8 text-[17px] font-bold rounded-xl uppercase tracking-[0.18em] border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-300">
                  GET FUNDED NOW
                </Button>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center justify-center">
                <img src={paymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[360px] opacity-90" />
              </div>
            </div>
            </div>
          </div>

          {/* Right Column - Table */}
          <div className="relative p-[2px] rounded-[36px] bg-gradient-to-br from-cyan-400/60 via-cyan-500/40 via-30% to-slate-900/80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-900/40 to-cyan-400/50 blur-[1px]" />
            <div 
              className="relative rounded-[34px] bg-gradient-to-br from-slate-900/98 via-slate-950/95 to-blue-950/90 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col"
              style={{
                backgroundImage: `url(${cardsCarouselBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            {/* Strong Black Overlay */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40 pointer-events-none" />
            
            {/* Internal Stars Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white animate-pulse"
                  style={{
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.4 + 0.1,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 2 + 2}s`
                  }}
                />
              ))}
            </div>
            {/* Subtle Cyan/Blue Glows */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <Table className="relative z-10 flex-1">
              <TableHeader>
                <TableRow className="border-b border-slate-600/50 hover:bg-transparent">
                  <TableHead className="text-slate-300 font-medium text-[17px] py-6 pl-8">Category</TableHead>
                  <TableHead className="text-slate-400 font-medium text-[17px] text-center py-6">Phase 1</TableHead>
                  <TableHead className="text-cyan-400 font-medium text-[17px] text-center py-6 pr-8">Live Trader</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { label: "Trading Period", p1: "Unlimited", live: "Unlimited" },
                  { label: "Minimum Trading Days", p1: "0 days", live: "Unlimited" },
                  { label: "Maximum Daily Loss (4%)", p1: "$4000", live: "$4000" },
                  { label: "Maximum Loss (8%)", p1: "$8000", live: "$8000" },
                  { label: "Profit Target (10%)", p1: "$10.000", live: "N/A" },
                  { label: "Price", p1: "$547", live: "Free", isLast: true },
                ].map((row, i) => (
                  <TableRow 
                    key={i} 
                    className="border-b border-slate-600/40 hover:bg-slate-800/30 transition-colors"
                  >
                    <TableCell className="text-white py-5 pl-8 font-semibold text-[16px]">{row.label}</TableCell>
                    <TableCell className="text-slate-300 text-center py-5 text-[16px]">{row.p1}</TableCell>
                    <TableCell className="text-slate-300 text-center py-5 pr-8 text-[16px]">{row.live}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Footer - Premium Design */}
            <div className="relative z-10 px-6 py-6 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950/80 border-t border-slate-700/30">
              {/* Animated glow line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              
              <div className="flex items-center justify-between flex-wrap gap-5">
                {/* See all trading rules - Premium Button */}
                <button className="group relative overflow-hidden px-6 py-3 rounded-2xl transition-all duration-500">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] rounded-2xl bg-slate-900/95 group-hover:bg-slate-900/80 transition-colors duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />
                  
                  <div className="relative flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-white font-bold text-[15px] tracking-wide">See all trading rules</span>
                    <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
                
                {/* Feature Cards */}
                <div className="flex items-center gap-4">
                  {/* Profit Split Card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
                    <div className="relative px-5 py-3 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-amber-500/30 group-hover:border-amber-400/50 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/40">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-400 text-[11px] uppercase tracking-wider">Profit Splits</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-amber-400 font-black text-xl">100</span>
                            <span className="text-amber-400 font-bold text-sm">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Get Funded Card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="relative px-5 py-3 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/40">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-400 text-[11px] uppercase tracking-wider">Get Funded</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-emerald-400 font-black text-xl">$400</span>
                            <span className="text-emerald-400 font-bold text-sm">K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Add-ons Card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="relative px-5 py-3 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/40">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-400 text-[11px] uppercase tracking-wider">Premium</span>
                          <span className="text-purple-400 font-bold text-[14px]">Add-ons</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
