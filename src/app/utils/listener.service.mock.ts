import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ListenerServiceMock {

    public openDrawer$ = new Subject<any>().asObservable();

    public openMovieDrawer(): BehaviorSubject<any> { return new BehaviorSubject({}); }

}
