import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './dashboard/add-admin/add-admin.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';


const routes: Routes = [
  {
    path:"",
    component: WelcomeScreenComponent
  },
  {
    path:"login",
    component: LoginFormComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent,
    children: [
      {
        path: 'add-admin',
        component: AddAdminComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      }
    ]
  },
  {
    path: "**",
    component: ErrorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
