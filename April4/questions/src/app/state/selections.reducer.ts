import {createReducer, on} from '@ngrx/store';
import { Selection } from './selection.model';
import { ADD_SELECTION, RESET_STATE } from './selections.actions';

export const initialState : ReadonlyArray<Selection> = [];

export const selectionsReducer = createReducer(
    initialState,
    on(ADD_SELECTION, (_state, {madeSelections}) => madeSelections)
)