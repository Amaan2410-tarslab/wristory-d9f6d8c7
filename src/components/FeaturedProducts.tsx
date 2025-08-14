import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import watch1 from "@/assets/watch-1.jpg";
import watch2 from "@/assets/watch-2.jpg";
import watch3 from "@/assets/watch-3.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Royal Chronograph Gold Edition",
    brand: "LuxWatch",
    price: 349999,
    originalPrice: 399999,
    image: watch1,
    rating: 5,
    isNew: true,
    isSale: true,
  },
  {
    id: "2",
    name: "Ocean Master Swiss Dive",
    brand: "Swiss Precision",
    price: 279999,
    image: watch2,
    rating: 4,
    isNew: false,
    isSale: false,
  },
  {
    id: "3",
    name: "Heritage Rose Gold Classic",
    brand: "Heritage Collection",
    price: 189999,
    originalPrice: 229999,
    image: watch3,
    rating: 5,
    isNew: false,
    isSale: true,
  },
  {
    id: "4",
    name: "Sport Titanium Pro",
    brand: "SportTech",
    price: 159999,
    image: watch1,
    rating: 4,
    isNew: true,
    isSale: false,
  },
  {
    id: "5",
    name: "Elegance Diamond Bezel",
    brand: "Diamond Luxury",
    price: 599999,
    image: watch2,
    rating: 5,
    isNew: false,
    isSale: false,
  },
  {
    id: "6",
    name: "Racing Carbon Fiber",
    brand: "Speed Collection",
    price: 249999,
    originalPrice: 299999,
    image: watch3,
    rating: 4,
    isNew: false,
    isSale: true,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Featured Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Timepieces
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of the finest luxury watches, 
            each piece representing the pinnacle of horological excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="luxury" size="xl" className="group">
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};