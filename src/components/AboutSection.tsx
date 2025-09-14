import { Card } from "./ui/card";
import { Target, TrendingUp, Focus } from "lucide-react";

const AboutSection = () => {
  const trustPoints = [
    {
      icon: Target,
      title: "Transparent",
      description: "No inflated metrics or false promises. We're building in public."
    },
    {
      icon: TrendingUp,
      title: "Momentum",
      description: "First client in trial, actively shipping features every week."
    },
    {
      icon: Focus,
      title: "Focused",
      description: "Specialized for service businesses, not a generic automation tool."
    }
  ];

  return (
    <section id="about" className="section-spacing section-divider">
      <div className="container-system">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">
              About IronDeskAI
            </h2>
          </div>

          <div className="content-width mx-auto mb-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We're building IronDeskAI to solve a simple problem: service businesses 
                need automation, but most tools are either too complex or too generic. 
                We're taking a different approach.
              </p>
              <p>
                Based in the GTA, we're focused on creating lightweight AI workflows 
                that actually ship. No bloated features, no endless customization—just 
                practical automation that works for real businesses.
              </p>
              <p>
                We have our first client in trial and we're iterating fast. This 
                front-end is live, features are rolling out, and we're building 
                everything transparently.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point) => {
              const IconComponent = point.icon;
              return (
                <Card
                  key={point.title}
                  className="p-5 border border-border rounded-2xl bg-card text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;