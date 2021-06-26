import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  movies: any = []

  constructor(private movieService: MovieService) { }

  performSearch(searchTerm:any){
    this.movieService.searchMovieRequest(searchTerm).then((success)=>{
      this.movies = this.movieService.searchmovies
    })
    // console.log(this.movies);
  }

  ngOnInit(): void {
    this.performSearch('batman')
  }

}
