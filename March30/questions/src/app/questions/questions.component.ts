import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public importedData: any[] = [];
  public processedData: { id: number, title: string, parentID: any, options: any[], hasMultipleValues: boolean, image: string, questions: any[] }[] = [

  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.importedData = this.dataService.questionData

    for (let card of this.importedData) {
      if (!card.parentID) {
        this.processedData.push({ ...card, questions:[] })
      }
    }

    for (let card of this.processedData) {
      for (let questions of this.importedData) {
        if (questions.parentID === card.id) {
          card.questions.push(questions)
        }
      }
    }

    // console.log(this.processedData)
  }
}
