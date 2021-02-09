import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private readonly httpClient: HttpClient) { }

  public getTopMovies(): Observable<any> {
    return this.httpClient.get('http://www.mocky.io/v2/5dc3c053300000540034757b')
  }
}
