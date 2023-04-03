import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomComponent } from '../custom.component';
import { Store, StoreModule} from '@ngrx/store';
import { choiceReducer } from '../state/choices.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("myChoices", choiceReducer)
  ]
})
export class CustomModule { }
