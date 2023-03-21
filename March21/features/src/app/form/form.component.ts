import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(){}

  userSignupForm = new FormGroup({
    fullName:new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern("^[A-Za-z]+$")]),
    email:new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl(''),
    age:new FormControl('', [Validators.min(18)]),
    password:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    confirmPassword:new FormControl('', [Validators.required])
  })

  fullnameWarning:boolean = false;
  passwordMatchingWarning:boolean = false;

  signUp(){
    this.passwordMatchingWarning = this.userSignupForm.value.password!==this.userSignupForm.value.confirmPassword
  }
}
