import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JokedataService {

  constructor(private http:HttpClient) { }
  jokes(){
    try{
      this.http.get('https://official-joke-api.appspot.com/random_ten')
    }catch(err){
      console.log(err)
    }  
  }
}
