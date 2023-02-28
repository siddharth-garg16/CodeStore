import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent {
  @Input() customerName:string;
  @Input() dateOfReview:string;
  @Input() reviewHeading:string;
  @Input() reviewContent:string;

}
