import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { ErrorComponent } from './error/error.component';
import { PriceCardComponent } from './price-card/price-card.component';
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
    //need to add :id here
    path:'customization',
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
