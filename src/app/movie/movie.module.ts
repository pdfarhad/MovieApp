import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { routing } from './movie.routes';
import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    CommonModule,
    // routing
  ],
  declarations: [
    MovieComponent
  ]
})
export class MovieModule { }
