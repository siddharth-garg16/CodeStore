import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  constructor(private dataService:DataService){}

  enteredValue:string = "";

  onButtonClick(){
    this.dataService.raiseDataEmitterEvent(this.enteredValue)
  }
}

