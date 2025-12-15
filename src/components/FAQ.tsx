import { HelpCircle, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "What account types and sizes are available with WeFund?",
      answer:
        "WeFund offers a 1 Step Challenge and a 2 Step Challenge.\nIn the 1 Step you can choose 25K, 50K, 100K or 200K.\nIn the 2 Step you can choose 5K, 10K, 25K, 50K, 100K or 200K.",
    },
    {
      question: "How does the WeFund evaluation process work?",
      answer:
        "You choose your account size and start trading.\nThere is no time limit.\nIf you reach the profit target without hitting the daily or total drawdown you pass.\nThe 1 Step has only one phase before funding.\nThe 2 Step has phase 1 and phase 2 before you receive a live account and real payouts.",
    },
    {
      question: "What are the profit split arrangements with WeFund?",
      answer:
        "Profit splits start from 50 percent up to 90 percent depending on the evaluation type and add ons.\nThe 2 Step starts at 80 percent and can be upgraded to 90 percent.\nThe 1 Step starts at 50 percent and increases to 70 and 80 percent on future payouts or can be upgraded to 90 percent.\nThe 10X Trader Program offers up to 100 percent profit share.",
    },
    {
      question: "Can I trade all types of financial instruments with WeFund?",
      answer:
        "If you hit the daily or total drawdown the account is breached and will be closed.\nThere are no hidden rules.\nIf you trade within the limits and reach the target you get funded.\nWe never deny payouts for strategy only for our rule violations.",
    },
    {
      question: "What are the consequences of breaking trading rules during the evaluation?",
      answer:
        "The WeFund evaluation process comprises a challenge phase where traders must achieve specified profit targets while adhering to predefined risk limits. Successful traders who meet these criteria progress to managing live accounts.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore some common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            return (
              <div
                key={index}
                className={`
                  border rounded-xl overflow-hidden transition-all duration-300 ease-out
                  ${isOpen 
                    ? 'border-cyan-500/40 bg-gradient-to-r from-slate-900/80 to-slate-800/40 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                    : 'border-slate-700/50 bg-slate-900/30 hover:border-slate-600/50'
                  }
                `}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
                <div
                  className={`
                    grid transition-all duration-300 ease-out
                    ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            className="border-cyan-500/30 text-white hover:bg-cyan-500/10 hover:border-cyan-500/50 px-8 py-6 rounded-full transition-all duration-300"
            asChild
          >
            <a href="https://support.we-fund.com/en/" target="_blank" rel="noopener noreferrer">
              To all FAQs
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};