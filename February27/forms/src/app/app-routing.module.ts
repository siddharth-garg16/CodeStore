import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"template-driven-signup",
    component:SignupComponent
  },
  {
    path:"reactive-signup",
    component:ReactiveSignupComponent
  },
  {
    path:"",
    component:LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
