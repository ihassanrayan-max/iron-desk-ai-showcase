import { useState } from "react";
import { Card } from "./ui/card";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I preview a workflow?",
      answer: "Book a walkthrough and we'll demo a workflow live in 15-20 minutes. You'll see exactly how it works for your niche."
    },
    {
      question: "What's included today vs later?",
      answer: "Today: front-end demos and workflow mapping. Next: full automation deployment, integrations, and live agent testing."
    },
    {
      question: "What integrations will be supported?",
      answer: "Starting with common CRMs, email platforms, and scheduling tools. We build integrations based on client needs, not a predetermined list."
    },
    {
      question: "What's the pricing timeline?",
      answer: "Currently in trial phase with our first client. Pricing will be transparent and announced when features go live—no surprises."
    },
    {
      question: "Who do you serve best?",
      answer: "Service businesses with repetitive workflows: consultants, agencies, contractors, and local service providers looking to automate operations."
    },
    {
      question: "How do I get started?",
      answer: "Book a walkthrough below. We'll discuss your niche, map your first automation opportunity, and show you exactly what we're building."
    }
  ];

  return (
    <section className="py-16 section-divider">
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border border-border rounded-2xl bg-card overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;