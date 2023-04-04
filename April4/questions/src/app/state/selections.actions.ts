import { createAction } from '@ngrx/store';

export const ADD_SELECTION = createAction(
    "[ADD_SELECTION] will add the client selection"
)
export const RESET_STATE = createAction(
    "[RESET_STATE] resets the current state to the default state"
)