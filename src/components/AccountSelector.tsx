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
              className="relative rounded-[34px] bg-gradient-to-br from-slate-900/98 via-slate-950/95 to-blue-950/90 backdrop-blur-sm p-10 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)]"
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
              <h2 className="text-white text-[32px] font-semibold mb-10">Configure your Challenge</h2>
              
              {/* MT5 Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-blue-950/40 border border-blue-500/20 p-5 flex items-center gap-5 mb-8">
                <img src={mt5Logo} alt="MT5" className="h-14 w-auto" />
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[13px] font-medium uppercase tracking-wider">Trader</span>
                  <span className="text-white text-xl font-semibold">MT5</span>
                </div>
              </div>

              {/* Account Type */}
              <div className="mb-8">
                <h4 className="text-slate-400 text-[15px] font-medium mb-4 uppercase tracking-wider">Account Type</h4>
                <div className="rounded-xl bg-slate-900/60 border border-blue-500/20 p-2 grid grid-cols-3 gap-2">
                  {/* Selected */}
                  <Button className="bg-gradient-to-b from-cyan-500/20 to-cyan-600/10 text-white border border-cyan-500/40 rounded-xl py-6 font-medium text-base shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    1 Step - Algo
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-2.5 py-0.5 bg-slate-700/80 text-slate-300 rounded-full whitespace-nowrap font-medium border border-slate-600/40">
                      Coming Soon
                    </span>
                    <Button className="w-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-6 font-medium text-base transition-colors">
                      1 Step Pro
                    </Button>
                  </div>
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-6 font-medium text-base transition-colors">
                    2 Step
                  </Button>
                </div>
              </div>

              {/* Account Size */}
              <div className="mb-10">
                <h4 className="text-slate-400 text-[15px] font-medium mb-4 uppercase tracking-wider">Account Size</h4>
                <div className="rounded-xl bg-slate-900/60 border border-blue-500/20 p-2 grid grid-cols-5 gap-1.5">
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-6 px-0 font-medium text-base transition-colors">
                    $10k
                  </Button>
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-6 px-0 font-medium text-base transition-colors">
                    $25k
                  </Button>
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-6 px-0 font-medium text-base transition-colors">
                    $50k
                  </Button>
                  <div className="relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-2.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full whitespace-nowrap font-medium border border-cyan-400/30">
                      Most popular
                    </span>
                    <Button className="w-full bg-gradient-to-b from-cyan-500/20 to-cyan-600/10 text-white border border-cyan-500/40 rounded-xl py-6 px-0 font-medium text-base shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      $100k
                    </Button>
                  </div>
                  <Button className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-500 border border-transparent rounded-xl py-6 px-0 font-medium text-base transition-colors">
                    $200k
                  </Button>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative mb-8 group">
                <div className="absolute -inset-1.5 bg-cyan-500/25 rounded-2xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <Button className="relative w-full bg-gradient-to-b from-slate-800/80 to-slate-900/80 text-white py-10 text-[20px] font-semibold rounded-xl uppercase tracking-[0.15em] border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-300">
                  GET FUNDED NOW
                </Button>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center justify-center">
                <img src={paymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[400px] opacity-80" />
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
                <TableRow className="border-blue-500/20 hover:bg-transparent">
                  <TableHead className="text-slate-400 font-medium text-[15px] py-7 pl-10">Category</TableHead>
                  <TableHead className="text-slate-400 font-medium text-[15px] text-center py-7">Phase 1</TableHead>
                  <TableHead className="text-cyan-400 font-medium text-[15px] text-center py-7 pr-10">Live Trader</TableHead>
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
                    className={`border-blue-500/10 hover:bg-slate-800/30 transition-colors ${row.isLast ? 'border-b border-blue-500/20' : ''}`}
                  >
                    <TableCell className="text-slate-300 py-6 pl-10 font-medium text-[15px]">{row.label}</TableCell>
                    <TableCell className="text-slate-400 text-center py-6 text-[15px]">{row.p1}</TableCell>
                    <TableCell className="text-slate-400 text-center py-6 pr-10 text-[15px]">{row.live}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Footer */}
            <div className="relative z-10 px-10 py-7 bg-slate-900/60 border-t border-blue-500/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-white font-medium text-[15px]">See all trading rules</span>
                <div className="flex items-center gap-2 text-[14px]">
                  <span className="text-slate-500">bi-weekly payout and</span>
                  <span className="text-cyan-400 font-medium">90% profit split</span>
                  <span className="text-slate-500">add-ons available</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[15px] mt-4">
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
