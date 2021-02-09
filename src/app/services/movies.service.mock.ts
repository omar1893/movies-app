import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class MoviesServiceMock {

    public getTopMovies(): BehaviorSubject<any> { return new BehaviorSubject({}); }

}
