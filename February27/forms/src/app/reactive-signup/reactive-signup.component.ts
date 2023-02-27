import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { ValidateName } from '../../shared/name.validator'

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent {
  constructor(){}
  // Validators.pattern("^[A-Za-z]+$")
  userSignupForm = new FormGroup({
    fullName:new FormControl('', [Validators.required, Validators.maxLength(30), ValidateName]),
    email:new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('', [Validators.required]),
    age:new FormControl('', [Validators.required, Validators.min(18)]),
    password:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    confirmPassword:new FormControl('', [Validators.required])
  })

  fullnameWarning:boolean = false;
  passwordMatchingWarning:boolean = false;

  signUp(){
    this.passwordMatchingWarning = this.userSignupForm.value.password!==this.userSignupForm.value.confirmPassword
  }
}
