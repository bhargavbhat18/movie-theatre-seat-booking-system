import { Link } from "react-router-dom";
import { Film, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-lg group-hover:animate-glow transition-all">
            <Film className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            QuickTickets
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Movies
          </Link>
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Theaters
          </Link>
          <Button variant="cinema" size="sm">
            Sign In
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                Movies
              </Link>
              <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                Theaters
              </Link>
              <Button variant="cinema" className="mt-4">
                Sign In
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
