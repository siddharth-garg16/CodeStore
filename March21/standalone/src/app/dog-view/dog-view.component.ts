import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Dog, DogsService } from '../dog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.scss']
})
export class DogViewComponent {
  dog$!: Observable<Dog | undefined>;

  constructor(private dogsService: DogsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(map(params => {
      return this.dogsService.dogs[Number(params.get('index'))]
    }))
  }
}
