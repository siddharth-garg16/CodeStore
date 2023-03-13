import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent{
  constructor(private http: HttpClient){}

  addAdminForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })
  usertype:string = 'admin';

  addAdmin(){
    console.log(this.addAdminForm.value)
    this.http.post("http://localhost:3000/users", {
      username:this.addAdminForm.value.username,
      password:this.addAdminForm.value.password,
      usertype: this.usertype
    }).subscribe(res => console.log(res))
    this.addAdminForm.reset()
  }
}

