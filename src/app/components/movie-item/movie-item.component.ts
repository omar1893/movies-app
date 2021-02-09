import { remove } from './../../actions/movie.actions';
import { ListenerService } from './../../utils/listener.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../../models/movie';
import { Store } from '@ngrx/store';
import  { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {

  public faTrash = faTrashAlt;
  @Input() movie: Movie;
  @Input() top = false;
  @Input() index = 0;
  @Input() placeholder = false;

  constructor(
    private readonly listenerService: ListenerService,
    private store: Store<{ movie: Movie[] }>
  ) {

  }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.listenerService.openMovieDrawer(true, this.movie);
  }

  public deleteMovie(index: number, event: Event): void {
    event.stopPropagation();
    this.store.dispatch(remove({index}))
  }

}
