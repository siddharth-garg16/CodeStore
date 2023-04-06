import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularWebStorageModule} from 'angular-web-storage'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
