import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatRadioChange } from '@angular/material/radio';

export interface Option{
  id:number,
  title:string,
  cost:number, 
  selected:boolean
}
export interface Question {
  id: number,
  title: string,
  parentID: null,
  options: Option[],
  image: string,
  questions: any[]
}
export interface ProposedQuestion{
  id:number,
  parentID:number,
  title:string,
  options:Option[]
}
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit{
  importedData: any[] = [];
  processedData: Question[] = [];
  currentQuestion:number = 1;
  totalQuestions:number = 1;
  projectSelectionID:number = 0;
  selectedProject: any;
  proposedQuestions: ProposedQuestion[] = [];
  totalCost:number = 0;
  showPreferencePanel:string = "show";

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private _snackbar: MatSnackBar) { }

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

    this.projectSelectionID = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    for(let project of this.processedData){
      if(project.id === this.projectSelectionID){
        this.selectedProject = project;
      }
    }

    this.proposedQuestions = this.selectedProject.questions

    this.totalQuestions = this.proposedQuestions.length;
  }

  goToPreviousQuestion(){
    this.currentQuestion-=1;
  }

  goToNextQuestion(){
    this.currentQuestion+=1;
  }

  manageSelection(val:MatRadioChange, currentQuestionID:number){
    if(val.source.checked){
      for(let question of this.proposedQuestions){
        if(question.id===currentQuestionID){
          for(let option of question.options){
            if(option.id===Number(val.source.id)){
              option.selected = true;
            } else {
              option.selected = false;
            }
          }
        }
      }
    } else {
      for(let question of this.proposedQuestions){
        if(question.id===currentQuestionID){
          for(let option of question.options){
            if(option.id===Number(val.source.id)){
              option.selected = false;
            }
          }
        }
      }
    }
    this.handleBillingCost();     
  }

  hidePreferencePanel(){
    this.showPreferencePanel = "hide";
  }

  goBackToPreferencePanel(queID:number){
    this.showPreferencePanel = "edit";
    this.currentQuestion = queID;
  }

  askToContact(){
    this._snackbar.open("Contact our business team.", "Contact")
  }

  handleBillingCost(){
    let tempCost = 0;
    this.totalCost = tempCost;
    for(let question of this.proposedQuestions){
      for(let option of question.options){
        if(option.selected){
          tempCost+=option.cost;
        }
      }
    }
    this.totalCost = tempCost;
  }

  updateSelection(){
    this.showPreferencePanel = "hide";
  }
}