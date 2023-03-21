import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dog } from '../dog.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dog-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dog-list-card.component.html',
  styleUrls: ['./dog-list-card.component.scss']
})
export class DogListCardComponent {
  @Input() dog!: Dog;
  @Input() index!: Number;

  constructor() { }

  ngOnInit(): void {
  }
}
