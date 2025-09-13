import { Card } from "./ui/card";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      manual: "Manual lead qualification calls",
      automated: "AI pre-qualifies with smart intake forms"
    },
    {
      manual: "Hours crafting custom proposals",  
      automated: "Discovery notes → proposal in minutes"
    },
    {
      manual: "Scattered client communications",
      automated: "Centralized updates and follow-ups"
    }
  ];

  return (
    <section className="py-16 section-divider">
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">
            Manual ops vs With IronDeskAI
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Manual column */}
          <Card className="p-6 border border-border rounded-2xl bg-card">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center mr-3">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <h3 className="font-semibold text-muted-foreground">Manual Operations</h3>
            </div>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {item.manual}
                </p>
              ))}
            </div>
          </Card>

          {/* Automated column */}
          <Card className="p-6 border border-border rounded-2xl bg-card">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-semibold">With IronDeskAI</h3>
            </div>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <p key={index} className="leading-relaxed">
                  {item.automated}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;