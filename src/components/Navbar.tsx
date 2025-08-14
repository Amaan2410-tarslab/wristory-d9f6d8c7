import { ShoppingCart, Search, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="nav-glow fixed top-0 w-full z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-background font-bold text-sm">LW</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            LuxWatch
          </h1>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Collections
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Brands
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            New Arrivals
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Sale
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <Button variant="ghost" size="icon" className="hover:bg-primary/20">
            <Search className="w-5 h-5" />
          </Button>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="hover:bg-primary/20">
            <Heart className="w-5 h-5" />
          </Button>

          {/* User Account */}
          <Button variant="ghost" size="icon" className="hover:bg-primary/20">
            <User className="w-5 h-5" />
          </Button>

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/20">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-accent text-background text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/20">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};