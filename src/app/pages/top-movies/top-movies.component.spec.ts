import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviesComponent } from './top-movies.component';
import { MoviesService } from '../../services/movies.service';
import { MoviesServiceMock } from '../../services/movies.service.mock';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TopMoviesComponent', () => {
  let component: TopMoviesComponent;
  let fixture: ComponentFixture<TopMoviesComponent>;
  let moviesService: MoviesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMoviesComponent ],
      providers: [{
        provide: MoviesService,
        useClass: MoviesServiceMock
      },],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoviesComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.get(MoviesService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get top movies', () => {
    spyOn(moviesService, 'getTopMovies').and.returnValue(of({ success: false }));
    
    component.ngOnInit();

    expect(moviesService.getTopMovies).toHaveBeenCalled();
  })
});
