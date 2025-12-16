import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import paymentsImage from "@/assets/payments.png";
import mobilePaymentsImage from "@/assets/mobile-pay-methods.png";
import startChallengeBtn from "@/assets/start-challenge-btn.png";
import mt5Logo from "@/assets/metatrader5-logo.webp";
import cardsCarouselBg from "@/assets/cards-carousel-bg-2.png";


export const AccountSelector = () => {
  return (
    <section id="objectives" className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
      {/* Static Stars Background - CSS pattern for performance */}
      <div className="absolute inset-0 stars-pattern pointer-events-none" />
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 lg:gap-8">
          
          {/* Left Column - Configure Challenge */}
          <div className="relative p-[2px] rounded-[24px] lg:rounded-[36px] bg-gradient-to-br from-cyan-400/60 via-cyan-500/40 via-30% to-slate-900/80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-900/40 to-cyan-400/50 blur-[1px]" />
            <div 
              className="relative h-full rounded-[22px] lg:rounded-[34px] bg-gradient-to-br from-slate-900/98 via-slate-950/95 to-blue-950/90 backdrop-blur-sm px-4 lg:px-6 py-5 lg:py-6 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col"
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
            
            {/* Static Stars Effect - CSS pattern for performance */}
            <div className="absolute inset-0 stars-pattern-subtle pointer-events-none" />
            {/* Subtle Cyan/Blue Glows */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-white text-xl lg:text-[26px] font-semibold mb-4 lg:mb-5">Configure your Challenge</h2>
              
              {/* MT5 Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-blue-950/40 border border-blue-500/20 p-3 flex items-center gap-4 mb-4">
                <img src={mt5Logo} alt="MT5" className="h-8 lg:h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">Trader</span>
                  <span className="text-white text-sm lg:text-base font-semibold">MT5</span>
                </div>
              </div>

              {/* Account Type */}
              <div className="mb-4">
                <h4 className="text-slate-400 text-[11px] lg:text-[12px] font-medium mb-2 uppercase tracking-wider">Account Type</h4>
                <div className="relative rounded-xl bg-slate-900/60 border border-blue-500/20 p-1.5">
                  {/* Coming Soon Badge - positioned above grid */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <span className="text-[9px] lg:text-[10px] px-2 lg:px-3 py-1 bg-slate-900/70 text-slate-300 rounded-full whitespace-nowrap font-semibold border border-slate-500/30 shadow-lg backdrop-blur-md">
                      Coming Soon
                    </span>
                    <div className="w-px h-2 bg-slate-500/40"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1 lg:gap-1.5">
                    {/* Selected */}
                    <Button className="bg-gradient-to-b from-cyan-500/20 to-cyan-600/10 text-white border border-cyan-500/40 rounded-xl py-2.5 lg:py-3 font-medium text-xs lg:text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      1 Step - Algo
                    </Button>
                    <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-2.5 lg:py-3 font-medium text-xs lg:text-sm transition-colors">
                      1 Step Pro
                    </Button>
                    <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-2.5 lg:py-3 font-medium text-xs lg:text-sm transition-colors">
                      2 Step
                    </Button>
                  </div>
                </div>
              </div>

              {/* Account Size */}
              <div className="mb-4 lg:mb-5">
                <h4 className="text-slate-400 text-[11px] lg:text-[12px] font-medium mb-2 uppercase tracking-wider">Account Size</h4>
                <div className="relative rounded-xl bg-slate-900/60 border border-blue-500/20 p-1.5">
                  {/* Most Popular Badge - positioned above grid */}
                  <div className="absolute -top-3 left-[70%] -translate-x-1/2 z-20 flex flex-col items-center">
                    <span className="text-[9px] lg:text-[10px] px-2 lg:px-3 py-1 bg-slate-900/70 text-cyan-300 rounded-full whitespace-nowrap font-semibold border border-cyan-400/30 shadow-lg backdrop-blur-md">
                      Most popular
                    </span>
                    <div className="w-px h-2 bg-cyan-400/40"></div>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-1">
                    <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-2.5 lg:py-3 px-0 font-medium text-xs lg:text-sm transition-colors">
                      $10k
                    </Button>
                    <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-2.5 lg:py-3 px-0 font-medium text-xs lg:text-sm transition-colors">
                      $25k
                    </Button>
                    <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-2.5 lg:py-3 px-0 font-medium text-xs lg:text-sm transition-colors">
                      $50k
                    </Button>
                    <Button className="bg-gradient-to-b from-cyan-500/20 to-cyan-600/10 text-white border border-cyan-500/40 rounded-xl py-2.5 lg:py-3 px-0 font-medium text-xs lg:text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      $100k
                    </Button>
                    <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-2.5 lg:py-3 px-0 font-medium text-xs lg:text-sm transition-colors">
                      $200k
                    </Button>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative mb-4 lg:mb-5 mt-auto">
                <a href="#" className="block w-full hover:opacity-90 transition-opacity">
                  <img src={startChallengeBtn} alt="Get Funded Now" className="w-full h-auto" />
                </a>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center justify-center">
                <img src={mobilePaymentsImage} alt="Payment Methods" className="lg:hidden w-full h-auto max-w-[300px] opacity-90" />
                <img src={paymentsImage} alt="Payment Methods" className="hidden lg:block w-full h-auto max-w-[360px] opacity-90" />
              </div>
            </div>
            </div>
          </div>

          {/* Right Column - Table */}
          <div className="relative p-[2px] rounded-[24px] lg:rounded-[36px] bg-gradient-to-br from-cyan-400/60 via-cyan-500/40 via-30% to-slate-900/80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-900/40 to-cyan-400/50 blur-[1px]" />
            <div 
              className="relative rounded-[22px] lg:rounded-[34px] bg-gradient-to-br from-slate-900/98 via-slate-950/95 to-blue-950/90 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col"
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
            
            {/* Static Stars Effect - CSS pattern for performance */}
            <div className="absolute inset-0 stars-pattern-subtle pointer-events-none" />
            {/* Subtle Cyan/Blue Glows */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Scrollable Table Container */}
            <div className="overflow-x-auto">
              <Table className="relative z-10 flex-1 min-w-[400px]">
                <TableHeader>
                  <TableRow className="border-b border-slate-600/50 hover:bg-transparent">
                    <TableHead className="text-slate-300 font-medium text-sm lg:text-[17px] py-4 lg:py-6 pl-4 lg:pl-8">Category</TableHead>
                    <TableHead className="text-slate-400 font-medium text-sm lg:text-[17px] text-center py-4 lg:py-6">Phase 1</TableHead>
                    <TableHead className="text-cyan-400 font-medium text-sm lg:text-[17px] text-center py-4 lg:py-6 pr-4 lg:pr-8">Live Trader</TableHead>
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
                      <TableCell className="text-white py-3 lg:py-5 pl-4 lg:pl-8 font-semibold text-xs lg:text-[16px]">{row.label}</TableCell>
                      <TableCell className="text-slate-300 text-center py-3 lg:py-5 text-xs lg:text-[16px]">{row.p1}</TableCell>
                      <TableCell className="text-slate-300 text-center py-3 lg:py-5 pr-4 lg:pr-8 text-xs lg:text-[16px]">{row.live}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {/* Footer */}
            <div className="relative z-10 px-4 lg:px-6 py-4 lg:py-5 bg-slate-900/40 border-t border-slate-700/30">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                {/* See all trading rules - Simple text */}
                <span className="text-white font-semibold text-sm lg:text-[15px]">See all trading rules</span>
                
                {/* Feature Cards - Cyan themed style */}
                <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
                  {/* Profit Split */}
                  <div className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-sm">
                    <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                      <svg className="w-3 lg:w-4 h-3 lg:h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[9px] lg:text-[10px] uppercase tracking-wider">Profit Splits</span>
                      <span className="text-cyan-400 font-bold text-xs lg:text-[14px]">100%</span>
                    </div>
                  </div>
                  
                  {/* Get Funded */}
                  <div className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-sm">
                    <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                      <svg className="w-3 lg:w-4 h-3 lg:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[9px] lg:text-[10px] uppercase tracking-wider">Get Funded</span>
                      <span className="text-cyan-400 font-bold text-xs lg:text-[14px]">$400K</span>
                    </div>
                  </div>
                  
                  {/* Add-ons */}
                  <div className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-sm">
                    <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                      <svg className="w-3 lg:w-4 h-3 lg:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[9px] lg:text-[10px] uppercase tracking-wider">Premium</span>
                      <span className="text-cyan-400 font-bold text-xs lg:text-[14px]">Add-ons</span>
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
