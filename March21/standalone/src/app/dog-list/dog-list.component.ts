import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from '../dog.service';
import { DogListCardComponent } from '../dog-list-card/dog-list-card.component';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule, DogListCardComponent],
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
  constructor(readonly dogsService: DogsService) { }

  ngOnInit(): void {
  }
}
