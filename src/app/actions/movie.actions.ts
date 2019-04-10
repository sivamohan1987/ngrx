import { Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const ADD_MOVIE = "[Movies] Push";
export const DELETE_MOVIE = "[Movies] Slice";

export class AddMovie implements Action {
  readonly type = ADD_MOVIE;

  constructor(public payload: Movie) {}
}

export class DeleteMovie implements Action {
  readonly type = DELETE_MOVIE;

  constructor(public payload: number) {}
}

export type Actions = AddMovie | DeleteMovie;