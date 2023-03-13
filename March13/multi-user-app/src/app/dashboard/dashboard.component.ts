import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router, private route: ActivatedRoute){}

  openAddAdmin(){
    this.router.navigate(['add-admin'], {relativeTo: this.route});
    console.log("admin")
  }

  openAddUser(){
    this.router.navigate(['add-user'], {relativeTo: this.route});
    console.log("user")
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(["/"])
  }
}
