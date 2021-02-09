import { Component, OnInit } from '@angular/core';
import  { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public film = faFilm;

  constructor() { }

  ngOnInit(): void {
  }

}
