import { NgModule } from "@angular/core";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'

const MaterialComponents: any[] = [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
];

@NgModule({
    imports:MaterialComponents,
    exports:MaterialComponents
})

export class MaterialModules { }