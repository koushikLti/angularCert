import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../../core/model/content';
import { MinToHourPipe } from "../../core/pipes/min-to-hour.pipe";
import { BudgetCurrencyPipe } from '../../core/pipes/budget-currency.pipe';
@Component({
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.css',
    imports: [
      CommonModule,
      MinToHourPipe, 
      BudgetCurrencyPipe]
})
export class MovieComponent implements OnInit {
  movie_id: string = '';
  movie:MovieDetails={
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  } ;
  errorMessage: string='';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _movieService: MovieService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((movie_id) => {
      this.movie_id = movie_id['movieId'];
    });

    this._movieService.getMovieById(this.movie_id).subscribe({ 
      next: (movie) => {
      this.movie=movie;
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.error.message || err.message;
      }
    });
  }

  backToHome():void{
    this._router.navigate(['/movies']);
  }
}
