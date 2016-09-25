import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { routing } from './movie.routes';
import { MovieComponent } from './movie.component';
import {SharedModule} from '../shared/shared.module';
import {MovieService} from '../shared/index';
import {MovieCardComponent}from './movie-card/movie-card.component';
import {MovieDetailComponent}from './movie-detail/movie-detail.component';
import {MovieListComponent}from './movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
    // routing
  ],
  declarations: [
    MovieComponent,MovieDetailComponent,MovieCardComponent,MovieListComponent
  ],
  exports:[MovieDetailComponent,MovieCardComponent,MovieListComponent],
  providers:[MovieService]
})
export class MovieModule { }
