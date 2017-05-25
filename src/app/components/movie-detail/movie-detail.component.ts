import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

   movie: Object;

  constructor(private  router: ActivatedRoute , private _movieService :MovieService ) { }

  ngOnInit() {
    this.router.params.subscribe((params) =>{
      let id = params['id'];
      this._movieService.getMovie(id).subscribe(
        movie => {
          console.log(movie);
        this.movie = movie
        });
      // console.log(params['id']);
    });
  }

}
