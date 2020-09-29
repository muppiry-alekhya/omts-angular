import { Component, OnInit } from '@angular/core';
import { Movie,MovieserviceService } from '../movieservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
 

  obj1: any;
  movie:Movie;
  message: string;
  

  constructor(private movieservice: MovieserviceService, private router: Router)
   {
    this.obj1 = this.movieservice.updateMethod();  
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  onUpdate(update: Movie): any
   {
     return this.movieservice.onUpdate(update).subscribe(data => {alert(data)});
    
  }
}
  


