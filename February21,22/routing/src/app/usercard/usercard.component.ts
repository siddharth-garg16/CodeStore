import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent {
  constructor(private route : ActivatedRoute){

  }

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
      contact: "987654321"
    },
    {
      id: "3",
      username: "Stewie Griffin",
      email: "stewie@mail.com",
      contact: "123454321"
    },
    {
      id: "4",
      username: "Meg Griffin",
      email: "meg@mail.com",
      contact: "123789456"
    }
  ];

  showDetails(id = this.route.snapshot.params['id'], userRole = this.route.snapshot.queryParamMap.get('role')):string[]{
    let role;
    if(userRole){
      role = userRole;
    }
    else{
      role="Roll not assigned yet."
    }

    for(let user of this.users){
      if(user.id === id){
        let name = user.username
        let mail = user.email
        let phone = user.contact
        return [name, mail, phone, role]
      }
    }
    return ["No user exists"]
  }

}
