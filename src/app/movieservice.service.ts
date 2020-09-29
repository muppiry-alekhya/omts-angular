import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService 
{
  public admin(uname:string, pass:string){
    return this.httpservice.get("http://localhost:8199/movie/admin-validation/"+uname+"/"+pass,{responseType:'json'});
  }

  logOut() {
    sessionStorage.removeItem('uname')
  }
  updateMovie: any;
  

  getAllMovieDetails(){
    console.log("in service");
    return this.httpservice.get("http://localhost:8199/movie/all");
  }
  constructor(private httpservice: HttpClient) { }

  /**
   * addMovie
addmovie: Movie */
  public addMovie(addmovie: Movie) {

    console.log("add movie");
    console.log(addmovie);
    const headers = new HttpHeaders().set('content_type','text/plain;charset=utf-8');
    return this.httpservice.post("http://localhost:8199/movie/add", addmovie, {headers, responseType:'text'})
    
  }

/**
 * deleteMovie
movieId */

public deleteMovie(movieId) 
{
  console.log(movieId);
  const headers = new HttpHeaders().set('content_type','text/plain;charset=utf-8');
  return this.httpservice.delete("http://localhost:8199/movie/delete/id/"+movieId, {headers, responseType:'text'})
  
}

public update(updatemovie: Movie) {
  this.updateMovie = updatemovie;
}
public updateMethod() {
  return this.updateMovie;
}
public onUpdate(updateMovie: Movie) {
  console.log("ins service update");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpservice.put("http://localhost:8199/movie/update", updateMovie,  { headers, responseType: 'text'});
}

}


export class Movie
{
    movieId:number
	movieName:string
	movieGenre:string
	movieDirector:string;
	movieLength:number;
  language:string;  
    movieReleaseDate: Date;
    movielang:string;
}

	