import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() id:number = 0;
  @Input() imgSrc:string = '';
  @Input() questionText:string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  navigateSelection(id:number):void{
    this.router.navigate([`/questions/customization/${id}`])
  }
}
