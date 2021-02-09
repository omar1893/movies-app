import { Movie } from './../models/movie';
import { ActionReducerMap, createReducer, on, createAction } from '@ngrx/store';
import { add, remove, get } from './../actions/movie.actions';

const initialState: Movie[] = [];

export interface State {
    readonly movie: Movie[];
}

const _movieReducer = createReducer(
    initialState,
    on(add, (state, payload) => [...state, payload]),
    on(remove, (state, payload) => {
        const newState = [...state];
        newState.splice(payload.index, 1)
        return newState;
    }),
    on(get, (state) => state)
);

export function movieReducer(state, action) {
    return _movieReducer(state, action);
}
