"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// import { ROUTER_DIRECTIVES } from '@angular/router';
var MovieComponent = (function () {
    function MovieComponent(_movieService) {
        var _this = this;
        this._movieService = _movieService;
        this._movieService.getPopular().subscribe(function (res) {
            console.log(res.results);
            _this.popularList = res.results;
        });
        this._movieService.getInTheaters().subscribe(function (res) {
            console.log(res.results);
            _this.theatersList = res.results;
        });
    }
    MovieComponent.prototype.searchMovies = function () {
        var _this = this;
        this._movieService.searchMovies(this.searchStr).subscribe(function (res) {
            _this.searchRes = res.results;
        });
        // console.log(this.searchStr)
    };
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent = __decorate([
        core_1.Component({
            selector: 'movies',
            templateUrl: './movie.component.html',
            styleUrls: ['./movie.component.css']
        })
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
