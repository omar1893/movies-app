import { Store } from '@ngrx/store';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';
import { ListenerService } from '../../utils/listener.service';
import { ListenerServiceMock } from '../../utils/listener.service.mock';
import { Observable } from 'rxjs';
import { TestStore } from '../../utils/test-store';
import { Movie } from '../../models/movie';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;
  let listenerService: ListenerService;
  let store: TestStore<Movie[]>
  const event = new Event('click')

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemComponent],
      providers: [
        {
          provide: ListenerService,
          useClass: ListenerServiceMock
        },
        {
          provide: Store,
          useClass: TestStore
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
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

  it('should execute openModal', () => {
    spyOn(listenerService, 'openMovieDrawer').and.callThrough();

    component.openModal();

    expect(listenerService.openMovieDrawer).toHaveBeenCalled();
  });

  it('should execute deleteMovie', () => {
    spyOn(store, 'dispatch').and.callThrough();

    component.deleteMovie(1, event);

    expect(store.dispatch).toHaveBeenCalled();
  });
});
