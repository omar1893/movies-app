import { TestStore } from './../../utils/test-store';
import { Store } from '@ngrx/store';
import { ListenerServiceMock } from './../../utils/listener.service.mock';
import { ListenerService } from './../../utils/listener.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AddMovieComponent } from './add-movie.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let listenerService: ListenerService;
  let fixture: ComponentFixture<AddMovieComponent>;
  let store: TestStore<Movie[]>
  const mockFile = new File(
    [],
    'filename.png',
    { type: 'image/png' }
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [AddMovieComponent],
      providers: [
        FormBuilder,
        {
          provide: ListenerService,
          useClass: ListenerServiceMock
        },
        {
          provide: Router,
          useValue: {
            navigate: () => true
          }
        },
        {
          provide: Store,
          useClass: TestStore
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: TestStore<Movie[]>) => {
    store = testStore;                            // save store reference for use in tests                                  
    store.setState([]); // set default state
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieComponent);
    listenerService = TestBed.get(ListenerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute createMovie successfully', () => {
    spyOn(store, 'dispatch').and.callThrough();

    component.addMovieForm.patchValue({
      title: 'Spiderman Movie',
      image: mockFile.name,
      release: new Date()
    })

    component.createMovie();

    expect(store.dispatch).toHaveBeenCalled();
  })

  it('should execute createMovie with invalid form', () => {
    component.addMovieForm.patchValue({
      title: '',
      image: '',
      release: new Date()
    })

    component.createMovie();

    expect(component.invalidForm).toEqual({ title: true, image: true });
  })

  it('should execute imageSelection', () => {
    const event = { target: { files: [mockFile] } };

    component.onImageSelection(event);

    expect(component.base64textString).not.toBe(null);
  })

});
