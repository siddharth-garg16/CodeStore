import {createReducer, on} from '@ngrx/store';
import { Selection } from './selection.model';
import { ADD_SELECTION, RESET_STATE } from './selections.actions';

export const initialState : ReadonlyArray<Selection> = [];

export const selectionsReducer = createReducer(
    initialState
    // on(RESET_STATE, (ST)=.{})
    // on(ADD_SELECTION, )
)