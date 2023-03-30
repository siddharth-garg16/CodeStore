import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  public data: {route:string, img:string, question:string}[] = [
    {
      route:'error',
      img:'../../assets/icons/mobile-app.svg',
      question:'mobile app'
    },
    {
      route:'error',
      img:'../../assets/icons/web-app.svg',
      question:'web app'
    }
  ]
}
