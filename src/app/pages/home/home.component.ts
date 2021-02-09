import { ListenerService } from './../../utils/listener.service';
import { Component, OnInit} from '@angular/core';
import { Movie } from '../../models/movie';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies$: Observable<Movie[]>
  public movies: Movie[] = [];
  public subscription: Subscription;
  public placeholderMovie: Movie[] = [{
    title: 'Aún no hay peliculas agregadas.',
    release: new Date(),
    image: '',
    description:''
  }];

  constructor(private readonly listenerService: ListenerService, private store: Store<{ movie: Movie[]}>) { 
    this.movies$ = store.select('movie');
    this.movies$.subscribe((data:Movie[]) => this.movies = data)
  }

  ngOnInit(): void {
  }

}
