import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { exhaustMap } from 'rxjs';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-exhaust',
  templateUrl: './exhaust.component.html',
  styleUrls: ['./exhaust.component.css']
})
export class ExhaustComponent implements OnInit, AfterViewInit{
  constructor(){}

  saveRequestNumber:number = 0;

  @ViewChild('saveBtn') saveBtn:ElementRef;

  ngOnInit():void {}

  ngAfterViewInit():void {
    fromEvent(this.saveBtn.nativeElement, 'click')
    .pipe(
      exhaustMap(async () => this.saveRequest())
    )
  }

  saveRequest(){
    this.saveRequestNumber+=1;
  }
}
