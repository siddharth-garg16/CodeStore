import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path:"customer-reviews",
    component: ReviewsComponent
  },
  {
    path:"about-us",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
