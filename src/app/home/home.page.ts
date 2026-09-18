import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonSkeletonText
} from '@ionic/angular';

import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonSkeletonText
  ],
})
export class HomePage implements OnInit {

  movies: Movie[] = [];
  loading = true;

  constructor(
    private movieService: MovieService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (movies) => {
        console.log('Movies received:', movies);

        this.movies = movies;
        this.loading = false;

        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching popular movies:', error);
        this.loading = false;

        this.changeDetectorRef.detectChanges();
      }
    });
  }
}