import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { movies, showtimes } from "@/data/movies";
import { cn } from "@/lib/utils";
import { Armchair } from "lucide-react";

const SeatSelection = () => {
  const { showtimeId } = useParams();
  const navigate = useNavigate();
  const showtime = showtimes.find((s) => s.id === showtimeId);
  const movie = showtime ? movies.find((m) => m.id === showtime.movieId) : null;
  
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  // Generate seat layout (8 rows x 12 seats)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;
  
  // Randomly mark some seats as occupied for demo
  const occupiedSeats = ['A5', 'A6', 'B7', 'C4', 'C5', 'D8', 'E6', 'F3', 'F4'];
  
  const toggleSeat = (seatId: string) => {
    if (occupiedSeats.includes(seatId)) return;
    
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };
  
  const handleProceed = () => {
    if (selectedSeats.length === 0) return;
    navigate(`/booking/${showtimeId}`, { 
      state: { selectedSeats, movie, showtime } 
    });
  };
  
  if (!movie || !showtime) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Showtime not found</h1>
        </div>
      </div>
    );
  }
  
  const totalPrice = selectedSeats.length * showtime.price;
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Movie Info */}
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-center gap-4">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-20 h-28 object-cover rounded"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground">{movie.title}</h1>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{showtime.theater}</span>
                  <span>{showtime.date} at {showtime.time}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-secondary rounded border border-border" />
              <span className="text-muted-foreground">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded" />
              <span className="text-muted-foreground">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-muted rounded opacity-50" />
              <span className="text-muted-foreground">Occupied</span>
            </div>
          </div>

          {/* Screen */}
          <div className="space-y-6">
            <div className="relative">
              <div className="h-2 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
              <p className="text-center text-sm text-muted-foreground mt-2">SCREEN</p>
            </div>

            {/* Seats Grid */}
            <div className="space-y-3">
              {rows.map((row) => (
                <div key={row} className="flex items-center justify-center gap-2">
                  <span className="w-6 text-sm font-medium text-muted-foreground">{row}</span>
                  <div className="flex gap-2">
                    {Array.from({ length: seatsPerRow }, (_, i) => {
                      const seatId = `${row}${i + 1}`;
                      const isOccupied = occupiedSeats.includes(seatId);
                      const isSelected = selectedSeats.includes(seatId);
                      
                      return (
                        <button
                          key={seatId}
                          onClick={() => toggleSeat(seatId)}
                          disabled={isOccupied}
                          className={cn(
                            "w-8 h-8 rounded transition-all duration-200 flex items-center justify-center",
                            isOccupied && "bg-muted opacity-50 cursor-not-allowed",
                            !isOccupied && !isSelected && "bg-secondary border border-border hover:border-primary hover:scale-110",
                            isSelected && "bg-primary text-primary-foreground scale-110 shadow-lg"
                          )}
                        >
                          <Armchair className="w-4 h-4" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <Card className="p-6 bg-card border-border/50 sticky bottom-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Selected Seats:</span>
                  {selectedSeats.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {selectedSeats.map((seat) => (
                        <Badge key={seat} variant="secondary">{seat}</Badge>
                      ))}
                    </div>
                  ) : (
                    <span className="text-muted-foreground">None</span>
                  )}
                </div>
                <div className="text-2xl font-bold text-foreground">
                  Total: <span className="text-accent">${totalPrice}</span>
                </div>
              </div>
              <Button
                variant="cinema"
                size="lg"
                disabled={selectedSeats.length === 0}
                onClick={handleProceed}
              >
                Proceed to Payment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
