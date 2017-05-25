import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Jsonp, JsonpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import { MovieComponent } from './components/movie/movie.component';
import {MovieService} from "./services/movie.service";


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    HttpModule,
    JsonpModule,
  ],
  providers: [ MovieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
