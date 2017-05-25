import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  popularList : Array<Object>;
  theatersList : Array<Object>;
  constructor(private _movieService: MovieService ) {

   this._movieService.getPopular().subscribe(res =>{
     console.log(res.results);
    this.popularList = res.results ;
   });

    this._movieService.getInTheaters().subscribe(res =>{
      console.log(res.results);
      this.theatersList = res.results ;
    });
  }

  ngOnInit() {
  }

}
