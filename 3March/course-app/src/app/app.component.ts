import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { CourseItem } from './store/models/courseItem.model';
import { State } from './store/models/state.model';
import {NgForm} from '@angular/forms'
import { AddItemAction } from './store/actions/course.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public courseItems$: Observable<CourseItem[]>

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.select((store) => {
      console.log(store, 'store')
      return store.courses
    })
    console.log('11111111')
    this.courseItems$ = this.store.select('courses')

  }

  addCourse(form: NgForm) {
    this.store.dispatch(new AddItemAction(form.value));
    // console.log(form.value)
    form.reset();
  }
}
