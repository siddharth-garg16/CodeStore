import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JokedataService {

  constructor(private http:HttpClient) { }
  
  getJokes(){
    return this.http.get('https://official-joke-api.appspot.com/random_ten') 
  }
}
