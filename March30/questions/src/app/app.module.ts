import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { CustomComponent } from './custom/custom.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HeaderComponent,
    ErrorComponent,
    QuestionCardComponent,
    PriceCardComponent,
    CustomComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
