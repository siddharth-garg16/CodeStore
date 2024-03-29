import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { ErrorComponent } from './error/error.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'questions',
    pathMatch:'full'
  },
  {
    path:'questions',
    component:QuestionsComponent
  },
  {
    path:'questions/customization/:id',
    component:CustomComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
