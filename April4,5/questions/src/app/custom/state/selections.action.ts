import { createAction, props } from '@ngrx/store';
import { Selection } from './selection.model';

export const ADD_SELECTION = createAction(
    "[ADD_SELECTION] will add a selection",
    props<{madeSelections:Selection[]}>()
)