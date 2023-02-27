import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName:string;
  email:string;
  phone:string;
  age:number;
  password:string;
  confirmPassword:string;

  showWarning:boolean = false;

  signUp(){
    this.showWarning = this.password!==this.confirmPassword;
    if(!this.showWarning){
      console.log(this.fullName, this.email, this.phone, this.age,this.password, this.confirmPassword)
    }  
  }
}
