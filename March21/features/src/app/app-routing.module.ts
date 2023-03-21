import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicCanvasComponent } from './dynamic-canvas/dynamic-canvas.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'For-Home-Page'
  },
  {
    path:'home',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path:'signup-form',
    component: FormComponent,
    title: 'For-Signup-Form'
  },
  {
    path:'dynamic-canvas',
    component: DynamicCanvasComponent,
    title: 'For-Dynamic-Canvas'
  },
  {
    path:'**',
    component: ErrorComponent,
    title: 'For-404-Error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
