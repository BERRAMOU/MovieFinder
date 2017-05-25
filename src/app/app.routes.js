/**
 * Created by beramos on 5/25/17.
 */
"use strict";
// import { provideRouter , RouterConfig } from '@angular/router';
var movie_component_1 = require("./components/movie/movie.component");
var routes = [
    {
        path: '', component: movie_component_1.MovieComponent
    }
];
exports.appRouterProviders = [
    provideRouter(routes)
];
