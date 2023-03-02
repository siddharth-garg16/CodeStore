import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { combineLatest } from 'rxjs';
import { Cakes } from '../store/cakes';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  constructor(
    serviceFactory: EntityCollectionServiceFactory,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cakeService = serviceFactory.create<Cakes>('Cake');
  }
  cakeService: EntityCollectionService<Cakes>;
 
  cakeForm: Cakes = {
    id: 0,
    name: '',
    cost: 0,
  };
 
  ngOnInit(): void {
    let fetchFormData$ = combineLatest([
      this.route.paramMap,
      this.cakeService.entities$,
    ]).subscribe(([params, cakes]) => {
      var id = Number(params.get('id'));
      var filteredCake = cakes.filter((_) => _.id == id);
      if (filteredCake) {
        this.cakeForm = { ...filteredCake[0] };
      }
    });
  }
  update() {
    this.cakeService.update(this.cakeForm).subscribe(() => {
      this.router.navigate(["/"]);
    })
  }
 
}
