import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-item',
  templateUrl: './latest-item.component.html',
  styleUrls: ['./latest-item.component.css']
})
export class LatestItemComponent {
  @Input() imgPath:string;
  @Input() productName:string;
  @Input() productPrice:number;
}
