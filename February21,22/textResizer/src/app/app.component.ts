import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disable:boolean=true;
  fontSize=10;
  changeSize(val:string){
    val==="decrease" ? this.fontSize-- : this.fontSize++;
  }
}
