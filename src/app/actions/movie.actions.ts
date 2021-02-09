import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store'

export const ADD_MOVIE = 'Add'
export const REMOVE_MOVIE = "Remove"
export const GET_MOVIES = "Get"

export const add = createAction(ADD_MOVIE, props<{ movie: Movie }>());
export const remove = createAction(REMOVE_MOVIE, props<{ index: number}>());
export const get = createAction(GET_MOVIES);