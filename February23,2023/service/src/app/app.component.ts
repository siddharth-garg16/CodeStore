import { Component } from '@angular/core';
import {JokedataService} from "./services/jokedata.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fetchedJokes:any;
  constructor(private jokeData:JokedataService){
    
  }

  getData(){
    this.jokeData.jokes().subscribe((data)=>{this.fetchedJokes=data})
  }
}
