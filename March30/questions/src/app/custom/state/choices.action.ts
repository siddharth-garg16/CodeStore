import { createAction, props} from '@ngrx/store';
import { Choice } from '../custom/Models/choices.model';

export const ADD_CHOICES = createAction(
    "[ADD_CHOICES] will add selected choice to the state",
    props<{allChoices:Choice[]}>()
)