import { Component } from '@angular/core';
import { BooksService } from './books/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
  constructor(private bookService:BooksService){
    // console.log(bookService.get())
  }
}
