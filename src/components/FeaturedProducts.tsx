import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedProducts = () => {
  const { products, loading, error } = useProducts(true);

  if (error) {
    return (
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <p className="text-destructive">Failed to load featured products</p>
        </div>
      </section>
    );
  }

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
          {loading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-xl" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-28" />
              </div>
            ))
          ) : (
            products.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard 
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  originalPrice={product.original_price}
                  image={product.images?.[0] || '/placeholder.svg'}
                  rating={Math.round(product.rating)}
                  isNew={false}
                  isSale={!!product.original_price}
                />
              </div>
            ))
          )}
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