import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  public importedData: {id:number, img:string, question:string}[] = [
    {
      id:1,
      img:'../../assets/icons/mobile-app.svg',
      question:'MAKE A MOBILE APP'
    },
    {
      id:2,
      img:'../../assets/icons/web-app.svg',
      question:'MAKE A WEB APP'
    }
  ]
}
