import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit{
  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.dataEmitter.subscribe((value)=>{
      this.displayValue = value;
    })
  }

  displayValue:string = ""
}
