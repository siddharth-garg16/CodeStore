import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialComponents: any[] = [
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule
]

@NgModule({
    imports: MaterialComponents,
    exports: MaterialComponents
})
export class MaterialModules { }