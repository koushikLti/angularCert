import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/model/content';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../core/pipes/filter.pipe';
import { MinToHourPipe } from '../../core/pipes/min-to-hour.pipe';
import { BudgetCurrencyPipe } from '../../core/pipes/budget-currency.pipe';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    FilterPipe,
    MinToHourPipe,
    BudgetCurrencyPipe,
  ],
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[] = [];
  movieTitle: string = '';
  releaseYear: number | undefined;
  errorMessage: string = '';

  constructor(private _movieService: MovieService) {}

  getMoviesList() {
    this._movieService.getMoviesList().subscribe({
      next:
      (data) => {
        this.moviesList = data;
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.error.message || err.message;
      }
    });
  }

  ngOnInit(): void {
    this.getMoviesList();
  }
}
