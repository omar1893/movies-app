import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {

  public movies: Movie[] = [];
  constructor(private readonly moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTopMovies().subscribe(({ movies }) => this.movies = movies)
  }

}
