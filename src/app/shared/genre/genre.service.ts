import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Genre} from './genre'

@Injectable()
export class GenreService {

  private static API_KEY: string = "a07e22bc18f5cb106bfe4cc1f83ad8ed";
  constructor(private http: Http) { }

  get(endpoint: string | number): Observable<Genre[]> {

    return this.http.get(`/3/genre/movie/list?api_key=${GenreService.API_KEY}`)
      .map((res: Response) => res.json().genres)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message:
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(errMsg);
    return Observable.throw(errMsg);

  }

}
