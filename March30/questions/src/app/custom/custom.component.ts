import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit{
  importedData: any[] = [];
  processedData: { id: number, title: string, parentID: any, options: any[], hasMultipleValues: boolean, image: string, questions: any[] }[] = [];
  currentQuestion:number = 1;
  totalQuestions:number = 10;
  projectSelection:string|null = '';

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

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

    this.projectSelection = this.activatedRoute.snapshot.paramMap.get('id');

    // console.log(this.processedData, 'from custom component')
    // console.log(this.projectSelection, typeof this.projectSelection)
  }

  goToPreviousQuestion(){
    this.currentQuestion-=1;
  }

  goToNextQuestion(){
    this.currentQuestion+=1;
  }

}
