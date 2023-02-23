import { Component } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  setup:string = "SETUP";
  punchline:string = "PUNCHLINE";
}
