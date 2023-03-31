import { Component, OnInit } from '@angular/core';
import {DataService} from '../Service/data.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit{
  public importedData: any[] = [];
  public processedData: any[] = [
    {
      id:1,
      img:'../../assets/icons/mobile-app.svg',
      title:'MAKE A MOBILE APP'
    },
    {
      id:2,
      img:'../../assets/icons/web-app.svg',
      title:'MAKE A WEB APP'
    },
    {
      id:3,
      img:'../../assets/icons/designing.svg',
      title:'MAKE DESIGNS'
    }
  ];

  constructor(private dataService: DataService){}

  ngOnInit(): void{
    this.importedData = this.dataService.questionData
    console.log(this.importedData)
  }
}
