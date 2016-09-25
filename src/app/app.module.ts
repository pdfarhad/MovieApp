import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {MovieModule} from './movie/movie.module';

// import { MovieComponent } from './movie/movie.component';
// import { MovieListComponent } from './movie/movie-list/movie-list.component';
// import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
// import { MovieCardComponent } from './movie/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieModule,
    SharedModule.forRoot()
    // RouterModule.forRoot()
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE%>'

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
