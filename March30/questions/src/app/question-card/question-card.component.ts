import { Component, Input } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() routingSrc = '';
  @Input() imgSrc = '';
  @Input() questionText = '';

  constructor(private router: Router){}

  navigateSelection(routingSrc:string){
    this.router.navigateByUrl(routingSrc)
  }
}
