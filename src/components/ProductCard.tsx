import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

export const ProductCard = ({ 
  name, 
  brand, 
  price, 
  originalPrice, 
  image, 
  rating, 
  isNew, 
  isSale 
}: ProductCardProps) => {
  return (
    <div className="watch-card group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={name} 
          className="watch-image w-full h-64 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-primary text-background px-2 py-1 rounded-full text-xs font-medium">
              New
            </span>
          )}
          {isSale && (
            <span className="bg-accent text-background px-2 py-1 rounded-full text-xs font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="glass" size="icon" className="w-8 h-8">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="glass" size="icon" className="w-8 h-8">
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="luxury" className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">{brand}</div>
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < rating 
                  ? 'bg-primary' 
                  : 'bg-muted'
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating}/5)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold price-glow">
            ₹{price.toLocaleString('en-IN')}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};