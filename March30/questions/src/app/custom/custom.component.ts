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
  totalQuestions:number = 1;
  projectSelectionID:number = 0;
  selectedProject: any;
  proposedQuestions: {id:number, hasMultipleValues:boolean, parentID:number, title:string, options:{id:number, title:string, cost:number}[]}[] = [];
  totalCost:number = 0;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.importedData = this.dataService.questionData;
    for (let card of this.importedData) {
      if (!card.parentID) {
        this.processedData.push({ ...card, questions:[] });
      }
    }
    for (let card of this.processedData) {
      let questionID = 1;
      for (let questions of this.importedData) {
        if (questions.parentID === card.id) {
          questions.id = questionID;
          card.questions.push(questions);
          questionID+=1;
        }
      }
    }
    // console.log(this.processedData, 'from custom component')


    this.projectSelectionID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(this.projectSelectionID, typeof this.projectSelection)


    for(let project of this.processedData){
      if(project.id === this.projectSelectionID){
        this.selectedProject = project;
      }
    }
    // console.log(this.selectedProject, "selected project");

    this.proposedQuestions = this.selectedProject.questions
    // console.log(this.proposedQuestions, 'proposed questions');

    this.totalQuestions = this.proposedQuestions.length;
  }

  goToPreviousQuestion(){
    this.currentQuestion-=1;
  }

  goToNextQuestion(){
    this.currentQuestion+=1;
  }
}
