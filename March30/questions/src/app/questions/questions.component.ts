import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  public data: {id:number, route:string, img:string, question:string}[] = [
    {
      id:1,
      route:'customization',
      img:'../../assets/icons/mobile-app.svg',
      question:'MAKE A MOBILE APP'
    },
    {
      id:2,
      route:'customization',
      img:'../../assets/icons/web-app.svg',
      question:'MAKE A WEB APP'
    }
  ]
}
