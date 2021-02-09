import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {

  @Input() movies: Movie[] = [];;
  @Input() top = false;
  @Input() placeholder = false;

  constructor() { }

  ngOnInit(): void {}

}
