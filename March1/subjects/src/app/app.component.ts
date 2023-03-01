import { Component, OnInit } from '@angular/core';
import {Subject, BehaviorSubject, } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'subjects';

  ngOnInit(){
  //   const testSubject = new Subject();
  // //subjects are multicast unlike observables
  //   testSubject.subscribe(d => console.log(d))

  //   testSubject.subscribe(d => console.log(d))

  //   testSubject.next(Math.random())
  }
}
