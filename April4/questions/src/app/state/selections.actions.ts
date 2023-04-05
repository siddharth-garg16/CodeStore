import { createAction, props } from '@ngrx/store';
import { Selection } from './selection.model';

export const ADD_SELECTION = createAction(
    "[ADD_SELECTION] will add the client selection",
    props<{madeSelections:Selection[]}>
)
export const RESET_STATE = createAction(
    "[RESET_STATE] resets the current state to the default state"
)