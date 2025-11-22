import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { movies } from "@/data/movies";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import cinemaHero from "@/assets/cinema-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cinemaHero}
            alt="Cinema"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Book Your Perfect
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Movie Experience
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Discover the latest movies, choose your seats, and get instant e-tickets. Your cinema adventure starts here.
            </p>
            <Button variant="cinema" size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              Explore Now Playing
            </Button>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section className="container py-16">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Now Showing</h2>
            <p className="text-muted-foreground">Book your tickets for the latest releases</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 QuickTickets. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
