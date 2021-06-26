import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  searchmovies: any[] = []
  movie!:Movie

  constructor(private http: HttpClient) { }

  searchMovieRequest(searchTerm: any) {
    interface searchMovieResponse {
      title: string;
      year: string;
      poster: string;
    }
    let searchMovieUrl = environment.movie_api + '?s=' + searchTerm + '&apikey=' + environment.api_key
    console.log(searchMovieUrl);  
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<searchMovieResponse>(searchMovieUrl)
        .toPromise()
        .then((response: { [x: string]: any }) => {
          this.searchmovies = []

          for (let i = 0; i < response['Search'].length; i++) {
         

            let title = response['Search'][i]['Title']
            let year = response['Search'][i]['Year']
            let poster = response['Search'][i]['Poster']

            let movie = new Movie(title, year, poster)
            this.searchmovies.push(movie)
          }

          resolve();
        }
          , (error) => {
            this.movie.title = 'Hello';
            this.movie.year = '2020';
            this.movie.poster = 'Not found';
            reject(error)
          })
    })
    return promise;
  }


}



