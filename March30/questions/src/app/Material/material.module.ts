import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

const MaterialComponents: any[] = [
    MatButtonModule,
    MatRadioModule
]

@NgModule({
    imports: MaterialComponents,
    exports: MaterialComponents
})
export class MaterialModules { }