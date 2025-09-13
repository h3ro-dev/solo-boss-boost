import { Button } from "@/components/ui/button";
import { Users, User, Crown, Calculator, Megaphone, Monitor, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-business-comparison.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating Role Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Crown className="absolute top-20 left-20 w-8 h-8 text-white/20 animate-float" />
        <Calculator className="absolute top-40 right-32 w-6 h-6 text-white/20 animate-float" style={{ animationDelay: '1s' }} />
        <Megaphone className="absolute bottom-40 left-16 w-7 h-7 text-white/20 animate-float" style={{ animationDelay: '2s' }} />
        <Monitor className="absolute bottom-20 right-20 w-8 h-8 text-white/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <Wrench className="absolute top-32 left-1/2 w-6 h-6 text-white/20 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-fade-up">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <User className="w-8 h-8 text-white" />
            <span className="text-white/80 text-lg font-medium">vs</span>
            <Users className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            You're the CEO, CFO, CMO, CTO,{" "}
            <span className="text-white/80">and Janitor.</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
            Your Competitor Just Hired Specialists for Each Role.
          </h2>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            While you're switching between accounting and marketing, they're executing with focused expertise in every function.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
            <p className="text-white text-lg italic">
              "When did running a business become being adequate at everything instead of excellent at something?"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              Get Specialist-Level AI
            </Button>
            <Button 
              variant="professional" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              See How It Works
            </Button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-large">
            <img 
              src={heroImage} 
              alt="Solo business owner juggling multiple roles vs specialized team" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Role Labels */}
          <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-medium">
            <span className="text-sm font-semibold text-primary">CEO + CFO + CMO + CTO</span>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-success/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-medium">
            <span className="text-sm font-semibold text-white">Specialized Team</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;