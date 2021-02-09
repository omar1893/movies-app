import { Store } from '@ngrx/store';
import { MoviesListComponent } from './../../components/movies-list/movies-list.component';
import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ListenerService } from '../../utils/listener.service';
import { ListenerServiceMock } from '../../utils/listener.service.mock';
import { of, Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestStore } from '../../utils/test-store';
import { Movie } from '../../models/movie';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let listenerService: ListenerService;
  let store: TestStore<Movie[]>

  const MOVIES = [{
    title: 'Spiderman',
    release: new Date(),
    description: 'Una pelicula de accion',
    image: 'Esta es una imagen'
  },
  {
    title: 'Iron Man',
    release: new Date(),
    description: 'Una pelicula de superheroes',
    image: 'Esta es otra imagen'
  },]

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, MoviesListComponent],
      providers: [{
        provide: ListenerService,
        useClass: ListenerServiceMock
      }, {
        provide: Store,
        useClass: TestStore,
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    listenerService = TestBed.get(ListenerService)
  });

  beforeEach(inject([Store], (testStore: TestStore<Movie[]>) => {
    store = testStore;   
    store.setState([]);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive movies from subscribed event', () => {
    store.setState(MOVIES);

    fixture.detectChanges();

    expect(component.movies).toEqual(MOVIES);
  });
});
