import { Button } from "@/components/ui/button";
import { Brain, DollarSign, Target, Settings, TrendingUp, CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const aiCapabilities = [
    {
      icon: DollarSign,
      role: "CFO-Level Financial AI",
      title: "Strategic Financial Management",
      features: [
        "Real-time financial analysis and forecasting",
        "Cash flow optimization strategies", 
        "Investment and expense prioritization",
        "Risk assessment and mitigation planning"
      ],
      benefit: "Make financial decisions like a Fortune 500 CFO"
    },
    {
      icon: Target,
      role: "CMO-Level Marketing AI", 
      title: "Growth-Driven Marketing",
      features: [
        "Multi-channel campaign strategy and execution",
        "Customer acquisition funnel optimization",
        "Brand positioning and messaging",
        "ROI tracking and performance analytics"
      ],
      benefit: "Scale customer acquisition like a venture-backed startup"
    },
    {
      icon: Settings,
      role: "COO-Level Operations AI",
      title: "Systematic Process Excellence", 
      features: [
        "Workflow automation and optimization",
        "Quality control and performance monitoring",
        "Resource allocation and scheduling",
        "Vendor and supply chain management"
      ],
      benefit: "Operate with the efficiency of a well-oiled enterprise"
    },
    {
      icon: TrendingUp,
      role: "VP Sales-Level Revenue AI",
      title: "Revenue Generation Machine",
      features: [
        "Pipeline management and lead scoring",
        "Sales process optimization",
        "Customer relationship management",
        "Revenue forecasting and target planning"
      ],
      benefit: "Close deals like a seasoned sales professional"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-10 h-10 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AI-Powered
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get Specialist-Level Performance in{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Every Business Function
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop competing with generalist skills. Deploy AI specialists that match the expertise of entire executive teams.
          </p>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {aiCapabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-card rounded-2xl p-8 shadow-large hover:shadow-glow transition-all duration-300 border border-border animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center shadow-medium">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {capability.role}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {capability.title}
                    </h3>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Benefit */}
                <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary">
                    {capability.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitive Advantage */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white shadow-glow animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Finally Compete Like You Have a Full Executive Team
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            While competitors hire specialists one at a time, you deploy an entire C-suite of AI expertise instantly.
          </p>
          <Button 
            variant="professional" 
            size="lg"
            className="text-lg px-10 py-4 h-auto bg-white text-primary hover:bg-white/90"
          >
            Scale My Business Operations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;