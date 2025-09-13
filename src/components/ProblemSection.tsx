import { Clock, TrendingDown, AlertTriangle, Zap } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Split Attention, Split Results",
      description: "You spend morning doing bookkeeping, afternoon doing marketing, evening doing customer service. They have experts doing each all day.",
      impact: "10% attention vs 100% focus"
    },
    {
      icon: TrendingDown,
      title: "Good Enough vs Excellence", 
      description: "Your marketing is 'pretty good.' Their CMO is driving 300% growth.",
      impact: "Competitors outpacing you 3:1"
    },
    {
      icon: AlertTriangle,
      title: "Learning While They're Scaling",
      description: "You're learning HR compliance while they're scaling with proper systems.",
      impact: "Always behind the curve"
    },
    {
      icon: Zap,
      title: "Reactive vs Strategic",
      description: "Every business function gets 10% of your attention while competitors give it 100% focus",
      impact: "Missing growth opportunities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Business of One{" "}
            <span className="text-destructive">Jack-of-All-Trades Trap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While you're juggling every role, specialized competitors are pulling ahead in every function that matters.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-up border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="bg-destructive/5 rounded-lg p-3 border-l-4 border-destructive">
                      <span className="text-sm font-semibold text-destructive">
                        Impact: {problem.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reality Check */}
        <div className="mt-16 text-center bg-card rounded-2xl p-8 shadow-large border border-border animate-scale-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              The Reality Check
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every minute you spend learning a new business function is a minute your competitors spend excelling at it. 
              The specialization gap isn't just growing—it's compounding daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;