import { Component, OnInit } from '@angular/core';
import { delay, from, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit{
  constructor(){}

  getData(data:string){
    return of(data+' purchased').pipe(delay(2000))
  }
  
  ngOnInit(): void {
    const source = from(['phone', 'laptop', 'camera'])

    source.pipe(
      switchMap(res => this.getData(res))
    ).subscribe(res => 
      console.log(res))
  }
}
