import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private router: Router){}

  users = [
    {
      id: "1",
      username: "Peter Griffin",
      email: "peter@mail.com",
      contact: "123456789",
    },
    {
      id: "2",
      username: "Glen Quagmire",
      email: "quagmire@mail.com",
      contact: "987654321",
    },
    {
      id: "3",
      username: "Stewie Griffin",
      email: "stewie@mail.com",
      contact: "123454321",
    },
    {
      id: "4",
      username: "Meg Griffin",
      email: "meg@mail.com",
      contact: "123789456",
    }
  ];

}

