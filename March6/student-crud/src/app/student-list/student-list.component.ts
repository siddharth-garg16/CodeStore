import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StudentService } from '../services/student.service';
import { StudentAddEditComponent } from '../student-add-edit/student-add-edit.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnDestroy{
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'dob', 'selectedSubjects', 'actions'];
  dataSource !: MatTableDataSource <any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _studentService:StudentService){}
  studentService = this._studentService.subscribe()
  ngOnInit():void{
    this.getStudentList()
  }

  getStudentList(){
    this._studentService.getStudentsList().subscribe({
      next: (res:any)=>{
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err:any)=>{
        console.log(err)
      }
    })
  }

  deleteStudent(id:number){
    this._studentService.deleteStudent(id).subscribe({
      next: (res:any)=>{
        alert("Student record deleted");
        this.getStudentList()
      },
      error: (err:any)=>{
        console.log(err)
      }
    })
  }

  ngOnDestroy(){
    this.studentService.unsubscribe()
  }
}
