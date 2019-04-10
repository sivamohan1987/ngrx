import { Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as MovieActions from '../actions/movie.actions';

const initialState: Movie = {
    name: 'Avengers',
    rating: 4
}

export function movieReducer(list: Movie[] = [], action: MovieActions.Actions) {
  switch(action.type) {
    case MovieActions.ADD_MOVIE:
      return [...list, action.payload];
    case MovieActions.DELETE_MOVIE:
      list.splice(action.payload, 1);
      return list;
    default:
      return list;
  }
}
