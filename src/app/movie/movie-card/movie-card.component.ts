import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../../shared/movies/movie';
import {Genre} from '../../shared/genre/genre'
@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['../../../assets/css/style.css', './movie-card.component.css']
})
export class MovieCardComponent {

  constructor() { }
  isFavorited: boolean = false;

  @Input() movie: Movie;
  @Input() genres: Genre[];
  @Input() isEven: boolean;
  @Output() toggleAsFavorite = new EventEmitter<Movie>();

  getImageUrl(fileName: string):string {
    return `https://image.tmdb.org/t/p/w1280${fileName}`;
  }



}
