import { Movie } from './../models/movie';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ListenerService {

    private openDrawer =new Subject<any>();
    public openDrawer$ = this.openDrawer.asObservable();

    public openMovieDrawer(open: boolean, movie?: Movie) {
        this.openDrawer.next({open, movie})
    }


}