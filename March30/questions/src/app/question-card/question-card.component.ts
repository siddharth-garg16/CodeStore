import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() id = 0;
  @Input() imgSrc = '';
  @Input() questionText = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  navigateSelection(id:number){
    this.router.navigate([`/questions/customization/${id}`])
  }
}
