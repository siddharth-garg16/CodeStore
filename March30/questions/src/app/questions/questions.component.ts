import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  public data: {route:string, img:string, question:string}[] = [
    {
      route:'/customization',
      img:'../../assets/icons/mobile-app.svg',
      question:'MAKE A MOBILE APP'
    },
    {
      route:'/customization',
      img:'../../assets/icons/web-app.svg',
      question:'MAKE A WEB APP'
    }
  ]
}
