import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private http: HttpClient) { }

  addUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })
  usertype: string = 'user';

  addUser():void {
    console.log(this.addUserForm.value.username, this.addUserForm.value.password, this.usertype)
    
    this.http.get(`http://localhost:3000/users?username=${this.addUserForm.value.username}`)
    .subscribe(res => {
      if(res[0]){
        alert("Username already taken.")
        return
      }
    })
    
    
    this.http.post("http://localhost:3000/users", {
      username: this.addUserForm.value.username,
      password: this.addUserForm.value.password,
      usertype: this.usertype
    }
    ).subscribe(res => console.log(res))
    this.addUserForm.reset();
  }
}
