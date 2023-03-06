import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CourseGuardService } from './Services/contact-guard.service';
import { UsercardComponent } from './usercard/usercard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent,
    canActivate:[CourseGuardService]
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"users/user/:id",
    component:UsercardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

