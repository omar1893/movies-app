import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { ListenerService } from '../../utils/listener.service';
import { ListenerServiceMock } from '../../utils/listener.service.mock';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let listenerService: ListenerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      providers: [
        {
          provide: ListenerService,
          useClass: ListenerServiceMock
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    listenerService = TestBed.get(ListenerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute close Drawer', () => {
    spyOn(listenerService, 'openMovieDrawer').and.callThrough()

    component.closeDrawer()

    expect(listenerService.openMovieDrawer).toHaveBeenCalled();
  });
});
