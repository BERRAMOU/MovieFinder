import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Jsonp, JsonpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import {MovieComponent} from './components/movie/movie.component';
import {MovieService} from "./services/movie.service";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';

const appRoutes: Routes = [
  {path: '', component: MovieComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PageNotFoundComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
