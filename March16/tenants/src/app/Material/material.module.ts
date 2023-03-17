import { NgModule } from "@angular/core";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete'

const MaterialComponents: any[] = [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule
];

@NgModule({
    imports:MaterialComponents,
    exports:MaterialComponents
})

export class MaterialModules { }