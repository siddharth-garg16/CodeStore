import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements AfterContentInit{
  @ContentChild('item1') item1: ElementRef;
  @ContentChild('item2') item2: ElementRef;
  @ContentChild('item3') item3: ElementRef;
  @ContentChild('item4') item4: ElementRef;

  // ngOnInit(){
  //   console.log(this.item1);
  //   console.log(this.item2);
  //   console.log(this.item3);
  //   console.log(this.item4);
  // }
  ngAfterContentInit(){
    console.log(this.item1.nativeElement.textContent);
    console.log(this.item2.nativeElement.textContent);
    console.log(this.item3.nativeElement.textContent);
    console.log(this.item4.nativeElement.textContent);
  }

}
