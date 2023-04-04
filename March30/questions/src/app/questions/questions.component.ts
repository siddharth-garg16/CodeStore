import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public importedData: any[] = [];
  public processedData: { id: number, title: string, parentID: any, options: any[], image: string }[] = [

  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.importedData = this.dataService.questionData

    for (let card of this.importedData) {
      if (!card.parentID) {
        this.processedData.push(card)
      }
    }
  }
}
