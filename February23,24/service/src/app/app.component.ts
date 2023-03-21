import { Component, OnDestroy } from '@angular/core';
import {JokedataService} from "./services/jokedata.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  fetchedJokes:any;
  constructor(private jokeData:JokedataService){}

  getData(){
    this.jokeData.getJokes().subscribe((data)=>{this.fetchedJokes=data})
  }

  ngOnDestroy(){
    this.jokeData.getJokes().unsubscribe();
  }
}
