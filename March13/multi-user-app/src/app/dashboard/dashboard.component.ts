import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  currentLoggedInUsertype: string = localStorage.getItem('usertype')

  superAdminCheck(): boolean {
    if (this.currentLoggedInUsertype === "super-admin") {
      return true;
    }
    return false;
  }

  adminCheck(): boolean {
    if (this.currentLoggedInUsertype === "admin") {
      return true;
    }
    return false;
  }

  openAddAdmin(): void {
    this.router.navigate(['add-admin'], { relativeTo: this.route });
    // console.log("admin")
  }

  openAddUser(): void {
    this.router.navigate(['add-user'], { relativeTo: this.route });
    // console.log("user")
  }

  logOut(): void {
    localStorage.clear()
    this.router.navigate(["/"])
  }
}
