import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.scss']
})
export class StudentAddEditComponent implements OnInit{
  studentForm : FormGroup;

  subjects:string[] = ['Maths', 'Physics', 'Chemistry', 'Biology', 'Economics', 'History', 'Business Studies']

  constructor(private _studentService : StudentService,
    private _dialogRef:MatDialogRef<StudentAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ){}

  ngOnInit(){
    this.studentForm = new FormGroup({
      firstName:new FormControl('', Validators.required),
      lastName:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email]),
      dob:new FormControl('', Validators.required),
      selectedSubjects: new FormArray([
        new FormControl('', Validators.required),
        new FormControl(''),
        new FormControl('')
      ])
    })
    this.studentForm.patchValue(this.data)
  }

  onSubmit(){
    if(this.studentForm.valid){
      if(this.data){
        this._studentService.updateStudent(this.data.id, this.studentForm.value).subscribe({
          next: (val:any)=>{
            alert("Student record updated")
            this._dialogRef.close(true)
          },
          error: (err:any)=>{
            console.log(err)
          }
        })
      }
      else{
        this._studentService.addStudent(this.studentForm.value).subscribe({
          next: (val:any)=>{
            alert("Student record added")
            this._dialogRef.close(true)
          },
          error: (err:any)=>{
            console.log(err)
          }
        })
      }
    } 
  }
}
