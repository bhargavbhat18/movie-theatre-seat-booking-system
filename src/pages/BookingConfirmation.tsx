import { useLocation, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Mail } from "lucide-react";
import { useEffect } from "react";

const BookingConfirmation = () => {
  const location = useLocation();
  const { selectedSeats, movie, showtime } = location.state || {};
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);
  
  if (!selectedSeats || !movie || !showtime) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Booking information not found</h1>
          <Link to="/">
            <Button variant="cinema" className="mt-4">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const bookingId = `BK${Date.now().toString().slice(-8)}`;
  const totalPrice = selectedSeats.length * showtime.price;
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16">
        <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
          {/* Success Message */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Booking Confirmed!</h1>
              <p className="text-muted-foreground mt-2">
                Your e-ticket has been generated successfully
              </p>
            </div>
          </div>

          {/* E-Ticket */}
          <Card className="p-8 space-y-6 border-primary/30 shadow-glow">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <p className="text-sm text-muted-foreground">Booking ID</p>
                <p className="text-lg font-bold text-foreground">{bookingId}</p>
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Confirmed
              </Badge>
            </div>

            <div className="flex gap-6">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-32 h-44 object-cover rounded"
              />
              <div className="flex-1 space-y-3">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{movie.title}</h2>
                  <p className="text-muted-foreground">{movie.genre}</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Theater:</span>
                    <span className="text-foreground font-medium">{showtime.theater}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground font-medium">
                      {new Date(showtime.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="text-foreground font-medium">{showtime.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seats:</span>
                    <span className="text-foreground font-medium">
                      {selectedSeats.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-lg text-muted-foreground">Total Amount</span>
                <span className="text-3xl font-bold text-accent">${totalPrice}</span>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="flex justify-center pt-4">
              <div className="w-32 h-32 bg-foreground/10 rounded-lg flex items-center justify-center">
                <div className="text-center text-xs text-muted-foreground">
                  QR Code
                  <br />
                  Placeholder
                </div>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cinema" className="flex-1 gap-2" size="lg">
              <Download className="w-5 h-5" />
              Download E-Ticket
            </Button>
            <Button variant="outline" className="flex-1 gap-2" size="lg">
              <Mail className="w-5 h-5" />
              Email Ticket
            </Button>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button variant="ghost">Book Another Movie</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
