import { Component } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css'],
})
export class BehaviorComponent {
  subject$ = new BehaviorSubject('0');

  // ngOnInit() {
  //   this.subject$.subscribe((val) => {
  //     console.log('Sub1 ' + val);
  //   });

  //   this.subject$.next('1');
  //   this.subject$.next('2');

  //   this.subject$.subscribe((val) => {
  //     console.log('sub2 ' + val);
  //   });

  //   this.subject$.next('3');
  //   this.subject$.complete();
  // }
}
