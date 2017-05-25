"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/Rx');
var MovieService = (function () {
    function MovieService(_jsonp) {
        this._jsonp = _jsonp;
        this.apiKey = '979a29960b83c7025ad559983bf870ab';
        console.log("MoviesService inialized ..");
    }
    MovieService.prototype.getPopular = function () {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getInTheaters = function () {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-06-20&primary_release_date.lte=2017-05-20&sort_by=popularity.desc&api_key=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.searchMovies = function (str) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + str + '&sort_by=popularity.desc&api_key=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    MovieService = __decorate([
        core_1.Injectable()
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
