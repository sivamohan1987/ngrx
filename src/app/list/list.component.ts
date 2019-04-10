import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Movie } from './../models/movie.model';
import { AppState } from './../app.state';
import * as MovieActions from './../actions/movie.actions';

@Component({
  selector: 'movies-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {
    this.movies = store.select('movielist');
  }

  ngOnInit() {
  }

  deleteMovie(index) {
    this.store.dispatch(new MovieActions.DeleteMovie(index));
    console.log(index);
  }
}