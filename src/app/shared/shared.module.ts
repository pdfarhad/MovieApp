import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ToolbarComponent} from './toolbar/toolbar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MovieService}from './movies/movie.service';
import {GenreService} from './genre/genre.service';
import {FavoritesService}from './favorites/favorites.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ToolbarComponent, NavbarComponent],
    exports: [ToolbarComponent, NavbarComponent,
        CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [MovieService, GenreService, FavoritesService]
        };
    }

}
