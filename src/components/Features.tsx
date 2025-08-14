import { Shield, Truck, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "Every watch comes with a certificate of authenticity and lifetime verification guarantee.",
  },
  {
    icon: Truck,
    title: "Free Luxury Delivery",
    description: "Complimentary white-glove delivery service with premium packaging and insurance.",
  },
  {
    icon: Award,
    title: "Swiss Certified",
    description: "All timepieces are certified by Swiss authorities and backed by manufacturer warranties.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Dedicated luxury concierge service for all your watch needs and after-sales support.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};