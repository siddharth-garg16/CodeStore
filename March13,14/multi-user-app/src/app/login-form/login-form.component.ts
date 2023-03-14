import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private router: Router, private http: HttpClient) { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })

  onLogin(): void {
    // console.log(this.loginForm.value);
    this.http.get(`http://localhost:3000/users?username=${this.loginForm.value.username}&password=${this.loginForm.value.password}`)
      .subscribe(res => {
        console.log(res[0]);
        localStorage.setItem('usertype', res[0].usertype)
        localStorage.setItem('token', res.token)
      })

    this.router.navigate(['/dashboard'])
    this.loginForm.reset();
  }
}
