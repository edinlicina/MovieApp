import { Movie } from './movie.model';

export interface WatchlistEntry {
  movie: Movie;
  userRating: number | null;
}
