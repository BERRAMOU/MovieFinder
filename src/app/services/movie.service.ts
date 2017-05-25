import { Injectable } from '@angular/core';
import  { Jsonp } from  '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

   apiKey : string ;

   constructor(private _jsonp : Jsonp) {
    this.apiKey = '979a29960b83c7025ad559983bf870ab';
    console.log("MoviesService inialized ..");
  }

  getPopular(){

     return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apiKey)
       .map(
         res => res.json()
       );
  }

  getInTheaters(){

    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-06-20&primary_release_date.lte=2017-05-20&sort_by=popularity.desc&api_key='+this.apiKey)
      .map(
        res => res.json()
      );
  }

  searchMovies(str : string ) {

    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + str + '&sort_by=popularity.desc&api_key=' + this.apiKey)
      .map(
        res => res.json()
      );
  }

}
