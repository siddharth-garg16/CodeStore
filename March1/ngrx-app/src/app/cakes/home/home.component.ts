import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Cakes } from '../store/cakes';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.cakeService = serviceFactory.create<Cakes>('Cake');
    this.allCakes$ = this.cakeService.entities$;
  }
 
  allCakes$: Observable<Cakes[]>;
  cakeService: EntityCollectionService<Cakes>;

  deleteModal: any;
  idToDelete: number = 0;
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.cakeService.getAll();
  }

  openDeleteModal(id: number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }
 
  confirmDelete() {
    this.cakeService.delete(this.idToDelete)
    .subscribe((data) => {
      this.deleteModal.hide();
    })
  }

}
