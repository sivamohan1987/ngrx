import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './reducer/movie.reducer';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    StoreModule.forRoot({
      movielist: movieReducer
    }) 
  ],
  declarations: [ AppComponent, HelloComponent, AddComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
