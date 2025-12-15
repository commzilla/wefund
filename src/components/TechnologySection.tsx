import technologyBadge from "@/assets/technology-badge.png";
import mt5LogoText from "@/assets/mt5-logo-text.png";
import mt5Dashboard from "@/assets/mt5-dashboard.png";
import tradingviewLogo from "@/assets/tradingview-logo.png";
import tradingviewDashboard from "@/assets/tradingview-dashboard.png";
import monitorIcon from "@/assets/monitor-icon.png";
import widgetIcon from "@/assets/widget-icon.png";

export const TechnologySection = () => {
  return (
    <section className="bg-black py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <img 
            src={technologyBadge} 
            alt="Technology" 
            className="h-8 md:h-10 mx-auto mb-6 md:mb-8"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
            Trade on the <span className="text-cyan-400">best trading platform</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto px-4">
            Trade with confidence by using the right tools to elevate every step of your trading journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {/* MT5 Card */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-950/80 overflow-hidden">
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 md:px-6 pt-4 md:pt-5">
              <img src={monitorIcon} alt="" className="w-3 md:w-4 h-3 md:h-4 opacity-60" />
              <span className="text-slate-400 text-xs md:text-sm">Trading Platform</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end">
              {/* Left Content */}
              <div className="flex-shrink-0 p-4 md:p-6 md:pb-8 md:w-[45%]">
                <img 
                  src={mt5LogoText} 
                  alt="MetaTrader 5" 
                  className="h-7 md:h-9 mb-6 md:mb-12"
                />
                <h3 className="text-white text-sm md:text-base font-semibold mb-2">
                  Power your Trading with MT5
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  Built for Speed, Precision, and Reliability
                </p>
              </div>

              {/* Right Image */}
              <div className="flex-1 self-stretch flex items-end">
                <img 
                  src={mt5Dashboard} 
                  alt="MT5 Dashboard" 
                  className="w-full h-auto object-cover object-left rounded-tl-lg"
                />
              </div>
            </div>
          </div>

          {/* TradingView Card */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-950/80 overflow-hidden">
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 md:px-6 pt-4 md:pt-5">
              <img src={widgetIcon} alt="" className="w-3 md:w-4 h-3 md:h-4 opacity-60" />
              <span className="text-slate-400 text-xs md:text-sm">Integration</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end">
              {/* Left Content */}
              <div className="flex-shrink-0 p-4 md:p-6 md:pb-8 md:w-[45%]">
                <img 
                  src={tradingviewLogo} 
                  alt="TradingView" 
                  className="h-6 md:h-7 mb-6 md:mb-12"
                />
                <h3 className="text-white text-sm md:text-base font-semibold mb-2">
                  Level your analysis game with Tradingview
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  Build your edge in the markets one indicator at a time.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex-1 self-stretch flex items-end">
                <img 
                  src={tradingviewDashboard} 
                  alt="TradingView Dashboard" 
                  className="w-full h-auto object-cover object-left rounded-tl-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
