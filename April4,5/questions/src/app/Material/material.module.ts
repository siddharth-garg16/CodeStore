import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents: any[] = [
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule
]

@NgModule({
    imports: MaterialComponents,
    exports: MaterialComponents
})
export class MaterialModules { }