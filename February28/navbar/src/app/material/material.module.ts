import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule} from '@angular/material/chips'

const MaterialComponents = [
  MatDividerModule,
  MatCardModule,
  MatChipsModule
];
  
  @NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
  })
  export class MaterialModule { }