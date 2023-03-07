import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.scss']
})
export class StudentAddEditComponent implements OnInit{
  studentForm : FormGroup;

  constructor(private _studentService : StudentService,
    private fb:FormBuilder
    ){}

  ngOnInit(){
    this.studentForm = new FormGroup({
      firstName:new FormControl('', Validators.required),
      lastName:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email]),
      dob:new FormControl('', Validators.required),
      selectedSubjects: new FormArray([
        new FormControl('', Validators.required)
      ])
    })

    // this.studentForm = this.fb.group({
    //   firstName:[""],
    //   lastName:[""],
    //   email:[""],
    //   dob:[""],
    //   selectedSubjects:[""]
    // })
  }

  canExit():boolean{
    if(this.studentForm.value.firstName || this.studentForm.value.lastName || this.studentForm.value.email || this.studentForm.value.dob){
      alert("You have unsaved changes. Do you want to quit?")
    }
    return true;
  }

  addField(){
    (<FormArray>this.studentForm.get('selectedSubjects')).push(new FormControl(''))
  }

  onSubmit(){
    this._studentService.addStudent(this.studentForm.value).subscribe({
        next: (val:any)=>{
          alert("Student record updated")
        },
        error: (err:any)=>{
          console.log(err)
        }
      })
    // console.log(this.studentForm.value)
    this.studentForm.reset()
  }
}
