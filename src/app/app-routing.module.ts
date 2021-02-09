import { TopMoviesComponent } from './pages/top-movies/top-movies.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'add-movie', component: AddMovieComponent},
  { path: 'top-movies', component: TopMoviesComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
