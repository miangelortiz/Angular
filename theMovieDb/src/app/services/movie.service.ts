import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  apiUrl = 'https://api.themoviedb.org/3/';
  apiKey = '?api_key=23d8252a863dde62c0523386d200c457&';



  constructor(private _http: HttpClient) { //Injeccion de dependencias
    console.log('servicio on!');
  }

  movieTheaters() {
    // let date = new Date();
    // let dateLastMonth = new Date() - 1 month();
    return this._http.get(`${this.apiUrl}discover/movie${this.apiKey}primary_release_date.gte=2019-06-04&primary_release_date.lte=2019-07-04`);
  }

  movie(id: number){
    return this._http.get(`${this.apiUrl}movie/${id}${this.apiKey}`);
  }


}

