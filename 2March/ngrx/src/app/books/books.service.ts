import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from './store/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  get():Observable<Book[]>{
    try{
     return this.http.get<Book[]>('http://localhost:3000/books');
    }catch(err){
      console.log(err)
      return err
    }
    
  }
}
