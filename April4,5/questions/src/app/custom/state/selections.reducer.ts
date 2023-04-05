import { createReducer, on} from '@ngrx/store';

import {ADD_SELECTION} from './selections.action';
import { Selection } from './selection.model';

export const initialState : ReadonlyArray<Selection> = [];

export const selectionReducer = createReducer(
    initialState,
    on(ADD_SELECTION, (_state, {madeSelections}) => madeSelections)
)