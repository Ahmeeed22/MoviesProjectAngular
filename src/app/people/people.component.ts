import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  imgPrefix:string='https://image.tmdb.org/t/p/w500/';

  trendingPeople:any=[];

  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTranding('person').subscribe((data)=>{
      this.trendingPeople=data.results;
      
     })
  }
   

  ngOnInit(): void {
  }

}
