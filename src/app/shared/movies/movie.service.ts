import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Movie} from './movie';

@Injectable()
export class MovieService {

  private static API_KEY: string = "your key here";
  constructor(private http: Http) { }
  get(endpoint: string | number): Observable<Movie[]> {

    return this.http.get(`/3/movie/${endpoint}?api_key=${MovieService.API_KEY}`)
      .map((res: Response) => res.json().results)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
