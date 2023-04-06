import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuardService } from './services/formGuard.service';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path:"student-list",
    component:StudentListComponent
  },
  {
    path:"",
    redirectTo:"student-list",
    pathMatch:'full'
  },
  {
    path:"form",
    component:StudentAddEditComponent,
    canDeactivate:[CanDeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
