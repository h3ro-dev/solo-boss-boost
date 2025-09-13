import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Clock, AlertTriangle, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConversionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    currentRole: "",
    biggestChallenge: "",
    overwhelmLevel: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Assessment Submitted!",
      description: "We'll analyze your business needs and send you a custom AI specialist roadmap.",
    });
  };

  const overwhelmOptions = [
    {
      id: "constantly-switching",
      icon: Clock,
      title: "Constantly Switching",
      description: "I jump between 5+ different business functions daily"
    },
    {
      id: "falling-behind", 
      icon: AlertTriangle,
      title: "Falling Behind Competitors",
      description: "Others are outperforming me in key areas"
    },
    {
      id: "growth-bottleneck",
      icon: Zap,
      title: "Growth Bottleneck",
      description: "I'm the limiting factor in my business scaling"
    },
    {
      id: "burnout-risk",
      icon: AlertTriangle,
      title: "Burnout Risk",
      description: "Working 60+ hours but still not keeping up"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Compete Like You Have a{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Full Executive Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a custom AI specialist roadmap based on your biggest business function gaps.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-large border border-border animate-scale-in">
          <div className="space-y-8">
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessName" className="text-base font-semibold mb-2 block">
                  Business Name
                </Label>
                <Input 
                  id="businessName"
                  placeholder="Your business name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  className="text-base h-12"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                  Email Address
                </Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="text-base h-12"
                />
              </div>
            </div>

            {/* Current Role */}
            <div>
              <Label className="text-base font-semibold mb-2 block">
                What's your current role situation?
              </Label>
              <Select 
                value={formData.currentRole} 
                onValueChange={(value) => setFormData({...formData, currentRole: value})}
              >
                <SelectTrigger className="text-base h-12">
                  <SelectValue placeholder="Select your situation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo-founder">Solo founder doing everything</SelectItem>
                  <SelectItem value="small-team">Small team, I wear multiple hats</SelectItem>
                  <SelectItem value="growing-team">Growing team, still handling too much</SelectItem>
                  <SelectItem value="established">Established business, want to optimize</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Overwhelm Level */}
            <div>
              <Label className="text-base font-semibold mb-4 block">
                Which scenario describes your biggest challenge?
              </Label>
              <RadioGroup 
                value={formData.overwhelmLevel}
                onValueChange={(value) => setFormData({...formData, overwhelmLevel: value})}
                className="grid md:grid-cols-2 gap-4"
              >
                {overwhelmOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <div key={option.id} className="relative">
                      <RadioGroupItem 
                        value={option.id} 
                        id={option.id}
                        className="peer sr-only"
                      />
                      <Label 
                        htmlFor={option.id}
                        className="flex items-start gap-4 p-4 rounded-lg border-2 border-border bg-background cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-accent transition-all"
                      >
                        <IconComponent className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-card-foreground mb-1">
                            {option.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {option.description}
                          </div>
                        </div>
                        <CheckCircle className="w-5 h-5 text-primary opacity-0 peer-checked:opacity-100 transition-opacity ml-auto" />
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>

            {/* Biggest Challenge */}
            <div>
              <Label htmlFor="challenge" className="text-base font-semibold mb-2 block">
                What's your biggest business function challenge right now?
              </Label>
              <Textarea 
                id="challenge"
                placeholder="e.g., I spend too much time on bookkeeping instead of growing sales, or my marketing isn't generating enough leads..."
                value={formData.biggestChallenge}
                onChange={(e) => setFormData({...formData, biggestChallenge: e.target.value})}
                className="text-base min-h-24"
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              variant="hero"
              size="lg"
              className="w-full text-lg py-4 h-auto"
            >
              Get My AI Specialist Roadmap
            </Button>

            {/* Trust Indicators */}
            <div className="text-center text-sm text-muted-foreground">
              <p>✓ Free assessment • ✓ Custom roadmap • ✓ No spam, ever</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConversionForm;