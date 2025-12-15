import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import wefundLogo from "@/assets/wefund-logo.png";
import trustpilotBadge from "@/assets/trustpilot-hero.png";
import ttpBadge from "@/assets/trustedprop-hero.png";
import paymentsImage from "@/assets/payments.png";

export const Footer = () => {
  return (
    <footer className="bg-[#0b1929] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Left Column - Logo & Trust Badges */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={wefundLogo} alt="WeFund" className="h-8" />
              <span className="text-xl font-bold text-white">WeFund</span>
            </div>
            <p className="text-gray-400 text-sm">support@we-fund.com</p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <img src={trustpilotBadge} alt="Trustpilot Rating" className="h-14" />
              <img src={ttpBadge} alt="The Trusted Prop Rating" className="h-14" />
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm pt-4">
              © 2025 WeFund. All Rights Reserved.
            </p>
          </div>

          {/* Middle Columns - Links */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    Challenges
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    10x Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    Giveaways and Competitions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    Risk Disclosure
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Social Icons */}
          <div className="lg:col-span-2 flex lg:justify-end">
            <div className="grid grid-cols-2 gap-3 h-fit">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Youtube className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <p className="text-gray-500 text-sm mb-4">Payment Methods:</p>
          <img src={paymentsImage} alt="Payment Methods" className="h-10" />
        </div>

        {/* Separator */}
        <div className="border-t border-cyan-500/30 mb-6" />

        {/* Disclaimer */}
        <div className="text-gray-500 text-xs space-y-3">
          <div className="flex items-start gap-4">
            <button className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-slate-700 transition-colors">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
            <div className="space-y-3">
              <p>
                WeFund Markets Ltd. is registered as an International Business Company (IBC) in Saint Lucia under company number 2025-00755, with its registered office at Ground Floor, Rodney Court Building, Rodney Bay, Gros-Islet, Saint Lucia, LC01 401, and its operational office located at 26, Nikoloz Baratashvili Street, office 72, Batumi 6000, Georgia.
              </p>
              <p>
                We do not provide access to any country on any sanctions list of the United Nations. Metatrader is not available for United States or Canada.
              </p>
              <p>
                Disclaimer: Trading involves significant risk and may result in the loss of your invested capital. Past performance does not guarantee future results. Nothing on this site constitutes financial advice or an offer to trade. Only trade with funds you can afford to lose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
