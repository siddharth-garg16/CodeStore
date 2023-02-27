import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent {
  constructor(){}

  showWarning:boolean = false;

  userSignupForm = new FormGroup({
    fullName:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    age:new FormControl(),
    password:new FormControl(''),
    confirmPassword:new FormControl('')
  })
  signUp(){
    this.showWarning = this.userSignupForm.value.password!==this.userSignupForm.value.confirmPassword
    if(!this.showWarning){
      console.log(this.userSignupForm.value);
    }
    
  }
}
