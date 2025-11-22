import { Movie } from "@/data/movies";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow border-border/50 bg-card">
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-semibold text-foreground">{movie.rating}</span>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{movie.genre}</span>
            <span>{movie.duration}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};
