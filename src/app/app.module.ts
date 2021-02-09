import { MoviesService } from './services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { TopMoviesComponent } from './pages/top-movies/top-movies.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ListenerService } from './utils/listener.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './reducers/movie.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMovieComponent,
    TopMoviesComponent,
    MoviesListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      movie: movieReducer
    }),
    FontAwesomeModule
  ],
  providers: [
    ListenerService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
