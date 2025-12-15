import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import platformCoinsBg from "@/assets/platform-coins-bg.png";
import discordBg from "@/assets/discord-bg.png";
import supportBg from "@/assets/support-bg-image.png";

export const CommunitySupport = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Platform Card */}
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-slate-700/50 rounded-3xl overflow-hidden min-h-[580px]">
            {/* Platform Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="text-slate-400 text-sm">Platform</span>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Unlock the <span className="text-cyan-400">$7 trillion</span>
                <br />a day market with wefund
              </h2>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6 rounded-lg">
                Get Funded Today
              </Button>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={platformCoinsBg}
                alt="Platform coins"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Community & Support */}
          <div className="flex flex-col gap-6">
            {/* Header Badge */}
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">Community & Support</span>
            </div>

            {/* General Support Card */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-slate-700/50 rounded-3xl overflow-hidden flex-1 min-h-[240px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={supportBg}
                  alt="Support"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">General Support</h3>
                <div className="flex items-end justify-between">
                  <p className="text-slate-400 text-sm max-w-[200px]">
                    Get in touch with questions about your account.
                  </p>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-5 rounded-lg">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>

            {/* Discord Card */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-purple-900/20 border border-slate-700/50 rounded-3xl overflow-hidden flex-1 min-h-[240px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={discordBg}
                  alt="Discord"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Discord Icon Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="w-12 h-12 bg-purple-600/80 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-purple-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Join Discord</h3>
                <div className="flex items-end justify-between">
                  <p className="text-slate-400 text-sm max-w-[240px]">
                    Join our the most transparent community out there. Don't miss any of our future updates and discount codes.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-slate-600 text-white hover:bg-slate-800 font-medium px-6 py-5 rounded-lg"
                  >
                    Join Discord
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};