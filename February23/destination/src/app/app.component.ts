import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cities:string[] = ["Delhi", "Mumbai", "Chandigarh", "Bangalore", "Hyderabad"]
  public routes = [
    {
      from:"",
      to:""
    }
  ]
}
