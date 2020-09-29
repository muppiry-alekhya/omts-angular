import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-view-all-movie',
  templateUrl: './view-all-movie.component.html',
  styleUrls: ['./view-all-movie.component.css']
})
export class ViewAllMovieComponent implements OnInit {
  movie: Movie=new Movie();
  movieDetails: Movie[];
  message: string;

  constructor( private movieservice: MovieserviceService, private router: Router) { 
    this.movieservice.getAllMovieDetails().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response){
    console.log(response);
    this.movieDetails=response;
  }

  ngOnInit(): void {
  }

  deleteMovie(id:number):void
  {
    console.log("component"+id);
    this.movieservice.deleteMovie(id).subscribe(data =>{
      alert(data);
    })
  }
  update(updatemovie: Movie) {
    console.log(updatemovie);
    this.movieservice.updateMovie(updatemovie);
    this.router.navigate(['/updatemovie']);
  }
  


}
