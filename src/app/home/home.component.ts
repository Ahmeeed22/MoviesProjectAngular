import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgPrefix:string='https://image.tmdb.org/t/p/w500/';
  trendingMovies:any=[];
  trendingTv:any=[];
  trendingPeople:any=[];
 
  constructor(private _MoviesService:MoviesService) { 
   
  }

  ngOnInit(): void {
    this._MoviesService.getTranding('movie').subscribe((data)=>{
      this.trendingMovies=data.results.slice(0,10);
      
     })
    this._MoviesService.getTranding('tv').subscribe((data)=>{
       this.trendingTv=data.results.slice(0,10);
       
      })
      this._MoviesService.getTranding('person').subscribe((data)=>{
       this.trendingPeople=data.results;
       
      })

  }

}
