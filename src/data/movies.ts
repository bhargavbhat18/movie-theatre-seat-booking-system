import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";

export interface Movie {
  id: string;
  title: string;
  poster: string;
  genre: string;
  duration: string;
  rating: number;
  description: string;
  cast: string[];
  director: string;
}

export interface Showtime {
  id: string;
  movieId: string;
  date: string;
  time: string;
  theater: string;
  price: number;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Stellar Odyssey",
    poster: movie1,
    genre: "Sci-Fi Action",
    duration: "2h 25m",
    rating: 8.5,
    description: "An epic journey through space where humanity's last hope lies in the hands of a brave crew venturing into the unknown reaches of the galaxy.",
    cast: ["Alex Chen", "Sarah Martinez", "David Kim"],
    director: "James Rodriguez"
  },
  {
    id: "2",
    title: "Hearts Aligned",
    poster: movie2,
    genre: "Romance Drama",
    duration: "1h 55m",
    rating: 7.8,
    description: "A touching story of two souls finding each other against all odds in the vibrant streets of Paris, exploring themes of love, loss, and destiny.",
    cast: ["Emma Thompson", "Lucas Bernard", "Sophie Dubois"],
    director: "Claire Laurent"
  },
  {
    id: "3",
    title: "The Silent Witness",
    poster: movie3,
    genre: "Mystery Thriller",
    duration: "2h 10m",
    rating: 8.2,
    description: "A psychological thriller that keeps you on the edge of your seat as a detective races against time to solve a case that hits too close to home.",
    cast: ["Michael Foster", "Rebecca Stone", "Thomas Wright"],
    director: "Christopher Mills"
  },
  {
    id: "4",
    title: "Realm of Legends",
    poster: movie4,
    genre: "Fantasy Adventure",
    duration: "2h 40m",
    rating: 9.1,
    description: "An enchanting fantasy epic following a young hero's quest to save their kingdom from ancient darkness, featuring breathtaking visuals and timeless storytelling.",
    cast: ["Olivia Rivers", "Jack Morrison", "Isabella Cruz"],
    director: "Andrew Peterson"
  }
];

export const showtimes: Showtime[] = [
  { id: "s1", movieId: "1", date: "2025-11-10", time: "14:30", theater: "Screen 1", price: 12 },
  { id: "s2", movieId: "1", date: "2025-11-10", time: "18:00", theater: "Screen 1", price: 15 },
  { id: "s3", movieId: "1", date: "2025-11-10", time: "21:30", theater: "Screen 2", price: 15 },
  { id: "s4", movieId: "2", date: "2025-11-10", time: "15:00", theater: "Screen 3", price: 12 },
  { id: "s5", movieId: "2", date: "2025-11-10", time: "19:30", theater: "Screen 3", price: 15 },
  { id: "s6", movieId: "3", date: "2025-11-10", time: "16:00", theater: "Screen 2", price: 12 },
  { id: "s7", movieId: "3", date: "2025-11-10", time: "20:00", theater: "Screen 1", price: 15 },
  { id: "s8", movieId: "4", date: "2025-11-10", time: "13:00", theater: "Screen 4", price: 12 },
  { id: "s9", movieId: "4", date: "2025-11-10", time: "17:30", theater: "Screen 4", price: 15 },
  { id: "s10", movieId: "4", date: "2025-11-10", time: "22:00", theater: "Screen 2", price: 15 },
];
