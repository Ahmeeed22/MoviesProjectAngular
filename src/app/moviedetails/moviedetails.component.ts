import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  imgPrefix:string='https://image.tmdb.org/t/p/w500/';

  id:string='';
  movieDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) {
    this.id= _ActivatedRoute.snapshot.params.id;
_MoviesService.getMovieDetails(this.id).subscribe((response)=>{
  this.movieDetails=response;
})
  
   }

  ngOnInit(): void {
  }

}
