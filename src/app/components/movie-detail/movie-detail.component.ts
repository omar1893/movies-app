import { Movie } from './../../models/movie';
import { ListenerService } from './../../utils/listener.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public open = false;
  public movie: Movie;

  constructor(private readonly listenerService: ListenerService) { }

  ngOnInit(): void {
    this.listenerService.openDrawer$.subscribe(({open, movie}) => {
      this.open = open;
      this.movie = movie;
    })
  }

  public closeDrawer(): void {
    this.listenerService.openMovieDrawer(false);
  }

}
