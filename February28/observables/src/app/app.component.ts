import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent{
  title = 'observables';

  constructor(private dataService:DataService){}

  // //created using new keyword
  // testObservable = new Observable((observer)=>{
  //   console.log("Observable begins");
  //   setTimeout(()=>{observer.next("1")}, 1000)
  //   setTimeout(()=>{observer.next("2")}, 2000)
  //   setTimeout(()=>{observer.next("3")}, 3000)
  //   // setTimeout(()=>{observer.error(new Error('Error happened!'))}, 3000)
  //   setTimeout(()=>{observer.next("4")}, 4000)
  //   setTimeout(()=>{observer.next("5")}, 5000)
  //   setTimeout(()=>{observer.complete()}, 6000)
  //   // observer.next("1");
  //   // observer.next("2");
  //   // observer.next("3");
  //   // observer.next("4");
  //   // observer.next("5");
  // });

  // //created using of operator
  // myObservable1 = of([1, 2, 3], ['a', 'b'], 23, 'c', 'd')

  // //created using from operator
  // myObservable2 = from([1, 2, 3, "A", "B", "c"])



  // ngOnInit(){
  //   this.testObservable.subscribe((val)=>{
  //     console.log(val);
  //   }, (error)=>{
  //     alert(error.message);
  //   }, ()=>{
  //     alert('Observable has emitted all values.');
  //   });
  // }

  // ngOnDestroy(){

  // }
}
