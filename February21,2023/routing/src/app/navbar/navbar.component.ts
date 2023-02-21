import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){}

  home(){
    this.router.navigate(['/'])
  }

  about(){
    this.router.navigate(['/about'])
  }

  contact(){
    this.router.navigate(['/contact'])
  }
}
