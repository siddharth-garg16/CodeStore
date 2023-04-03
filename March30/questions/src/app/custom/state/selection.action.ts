import { createAction, props} from '@ngrx/store';
import { Selection } from '../custom/Models/selection.model';

export const ADD_CHOICES = createAction(
    "[ADD_CHOICES] will add selected choice to the state",
    props<{selections:Selection[]}>()
)