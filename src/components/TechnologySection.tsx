import technologyBadge from "@/assets/technology-badge.png";
import mt5LogoText from "@/assets/mt5-logo-text.png";
import mt5Dashboard from "@/assets/mt5-dashboard.png";
import tradingviewLogo from "@/assets/tradingview-logo.png";
import tradingviewDashboard from "@/assets/tradingview-dashboard.png";
import monitorIcon from "@/assets/monitor-icon.png";
import widgetIcon from "@/assets/widget-icon.png";

export const TechnologySection = () => {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src={technologyBadge} 
            alt="Technology" 
            className="h-10 mx-auto mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trade on the <span className="text-cyan-400">best trading platform</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trade with confidence by using the right tools to elevate every step of your trading journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* MT5 Card */}
          <div className="rounded-xl border border-slate-700/40 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 p-6">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-8">
              <img src={monitorIcon} alt="" className="w-4 h-4 opacity-70" />
              <span className="text-slate-400 text-sm font-medium">Trading Platform</span>
            </div>

            <div className="flex items-start justify-between gap-4">
              {/* Left Content */}
              <div className="flex-1">
                <img 
                  src={mt5LogoText} 
                  alt="MetaTrader 5" 
                  className="h-8 mb-6"
                />
                <h3 className="text-white text-lg font-semibold mb-2">
                  Power your Trading with MT5
                </h3>
                <p className="text-slate-500 text-sm">
                  Built for Speed, Precision, and Reliability
                </p>
              </div>

              {/* Right Image */}
              <div className="flex-1">
                <img 
                  src={mt5Dashboard} 
                  alt="MT5 Dashboard" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* TradingView Card */}
          <div className="rounded-xl border border-slate-700/40 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 p-6">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-8">
              <img src={widgetIcon} alt="" className="w-4 h-4 opacity-70" />
              <span className="text-slate-400 text-sm font-medium">Integration</span>
            </div>

            <div className="flex items-start justify-between gap-4">
              {/* Left Content */}
              <div className="flex-1">
                <img 
                  src={tradingviewLogo} 
                  alt="TradingView" 
                  className="h-6 mb-6"
                />
                <h3 className="text-white text-lg font-semibold mb-2">
                  Level your analysis game with Tradingview
                </h3>
                <p className="text-slate-500 text-sm">
                  Build your edge in the markets one indicator at a time.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex-1">
                <img 
                  src={tradingviewDashboard} 
                  alt="TradingView Dashboard" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
