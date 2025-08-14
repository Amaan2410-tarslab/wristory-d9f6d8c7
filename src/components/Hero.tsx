import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";

export const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary font-medium tracking-wider uppercase text-sm">
              Premium Collection 2024
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Luxury
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Timepieces
              </span>
              <span className="block">Redefined</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Discover our exclusive collection of premium watches from the world's finest 
              craftsmen. Each piece tells a story of precision, elegance, and timeless beauty.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="luxury" size="xl" className="group">
              Explore Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 mr-2" />
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground text-sm">Premium Watches</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground text-sm">Luxury Brands</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-scale-in">
          <div className="relative">
            <img 
              src={heroWatch} 
              alt="Luxury Watch" 
              className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl animate-float"
            />
            
            {/* Floating Elements */}
            <div className="absolute top-10 -right-10 bg-card/80 backdrop-blur-sm rounded-xl p-4 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <div className="text-sm text-muted-foreground">Swiss Made</div>
              <div className="text-lg font-semibold text-primary">Premium Quality</div>
            </div>
            
            <div className="absolute bottom-10 -left-10 bg-card/80 backdrop-blur-sm rounded-xl p-4 animate-slide-up" style={{animationDelay: '1s'}}>
              <div className="text-sm text-muted-foreground">Starting from</div>
              <div className="text-xl font-bold price-glow">₹2,49,999</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};