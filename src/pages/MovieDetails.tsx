import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { movies, showtimes } from "@/data/movies";
import { Star, Clock, Calendar } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  const movieShowtimes = showtimes.filter((s) => s.movieId === id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Movie not found</h1>
          <Link to="/">
            <Button variant="cinema" className="mt-4">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Movie Header */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover blur-xl scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>
        
        <div className="relative container h-full flex items-end pb-16">
          <div className="flex flex-col md:flex-row gap-8 w-full animate-fade-in">
            <div className="w-64 shrink-0">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full rounded-lg shadow-2xl border border-border/50"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{movie.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <Badge variant="secondary" className="text-sm">
                    {movie.genre}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{movie.rating}/10</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {movie.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex gap-2 text-sm">
                  <span className="text-muted-foreground">Director:</span>
                  <span className="text-foreground font-medium">{movie.director}</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-muted-foreground">Cast:</span>
                  <span className="text-foreground font-medium">{movie.cast.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showtimes Section */}
      <section className="container py-16">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Select Showtime</h2>
            <p className="text-muted-foreground">Choose your preferred date and time</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movieShowtimes.map((showtime) => (
              <Link key={showtime.id} to={`/seats/${showtime.id}`}>
                <Card className="p-6 hover:border-primary hover:shadow-glow transition-all duration-300 cursor-pointer group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(showtime.date).toLocaleDateString()}</span>
                      </div>
                      <Badge variant="secondary">{showtime.theater}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {showtime.time}
                      </span>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">From</span>
                        <div className="text-xl font-bold text-accent">${showtime.price}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
