import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { ListenerService } from './utils/listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private listenerService: ListenerService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          listenerService.openMovieDrawer(false)
      }
  });
  }
}
