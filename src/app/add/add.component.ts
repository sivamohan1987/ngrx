import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Movie } from './../models/movie.model';
import { MovieForm } from './../models/movieForm.model';
import * as MovieActions from './../actions/movie.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'add-movie',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  model = new MovieForm('', 0);

  constructor(private store: Store<AppState>) { }

  onSubmit() {
    this.store.dispatch(new MovieActions.AddMovie({name: this.model.name, rating: this.model.rating}))
    console.log(this.model);
    this.clearForm();
  }

  clearForm() {
    this.model = new MovieForm('', 0);  
  }

  ngOnInit() {
  }

}