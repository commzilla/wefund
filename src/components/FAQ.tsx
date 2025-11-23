import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => {
  const faqs = [
    {
      question: "What account types and sizes are available with WeFund?",
      answer:
        "WeFund offers a 1 Step Challenge and a 2 Step Challenge. In the 1 Step you can choose 25K, 50K, 100K or 200K. In the 2 Step you can choose 5K, 10K, 25K, 50K, 100K or 200K.",
    },
    {
      question: "How does the WeFund evaluation process work?",
      answer:
        "You choose your account size and start trading. There is no time limit. If you reach the profit target without hitting the daily or total drawdown you pass. The 1 Step has only one phase before funding. The 2 Step has phase 1 and phase 2 before you receive a live account and real payouts.",
    },
    {
      question: "What are the profit split arrangements with WeFund?",
      answer:
        "Profit splits start from 50 percent up to 90 percent depending on the evaluation type and add ons. The 2 Step starts at 80 percent and can be upgraded to 90 percent. The 1 Step starts at 50 percent and increases to 70 and 80 percent on future payouts or can be upgraded to 90 percent. The 10X Trader Program offers up to 100 percent profit share.",
    },
    {
      question: "Can I trade all types of financial instruments with WeFund?",
      answer:
        "If you hit the daily or total drawdown the account is breached and will be closed. There are no hidden rules. If you trade within the limits and reach the target you get funded. We never deny payouts for strategy only for our rule violations.",
    },
    {
      question: "What are the consequences of breaking trading rules during the evaluation?",
      answer:
        "The WeFund evaluation process comprises a challenge phase where traders must achieve specified profit targets while adhering to predefined risk limits. Successful traders who meet these criteria progress to managing live accounts.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore some common questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <a href="https://support.we-fund.com/en/" target="_blank" rel="noopener noreferrer">
              To all FAQs
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
