import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  constructor(private httpClient:HttpClient) {

  }

  getAllStudents(){
    return this.httpClient.get('/getAllStudents')
  }

  getStudent(){
    return this.httpClient.get('/getStudentDetailsById/:id')
  }

  deleteStudent(){
    return this.httpClient.delete('/deleteStudent/:id')
  }

  createStudent(){
    return this.httpClient.post('/createStudent')
  }

}
