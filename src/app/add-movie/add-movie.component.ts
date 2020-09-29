import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieserviceService } from '../movieservice.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movie: Movie = new Movie();
  message: String;

  constructor(private movieservice: MovieserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(addmovie:Movie):any{
   
    console.log(addmovie);
    this.movieservice.addMovie(addmovie).subscribe(data =>{
      alert(data);
    })
  }

}
