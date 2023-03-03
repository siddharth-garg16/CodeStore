import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MergeComponent } from './merge/merge.component';
import { SwitchComponent } from './switch/switch.component';
import { ExhaustComponent } from './exhaust/exhaust.component';

const appRoutes:Routes = [
  {
    path:"merge-map",
    component:MergeComponent
  },
  {
    path:"switch-map",
    component:SwitchComponent
  },
  {
    path:"exhaust-map",
    component:ExhaustComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MergeComponent,
    SwitchComponent,
    ExhaustComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
