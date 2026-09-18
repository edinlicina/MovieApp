import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.model';
import { TMDB_API_BASE_URL } from '../config/tmdb.config';
import { environment } from '../../environments/environment';

interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

interface TmdbResponse {
  results: TmdbMovie[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Movie[]> {
    const url = `${TMDB_API_BASE_URL}/movie/popular`;
    const headers = {
      Authorization: `Bearer ${environment.tmdbAccessToken}`
    };

    return this.http.get<TmdbResponse>(url, { headers }).pipe(
      map((response: TmdbResponse) => 
        response.results.map(tmdbMovie => ({
          id: tmdbMovie.id,
          title: tmdbMovie.title,
          overview: tmdbMovie.overview,
          posterPath: tmdbMovie.poster_path,
          releaseDate: tmdbMovie.release_date,
          rating: tmdbMovie.vote_average
        }))
      )
    );
  }
}
