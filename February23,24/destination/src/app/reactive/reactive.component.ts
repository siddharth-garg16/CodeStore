import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  bookRouteForm = new FormGroup({
    fromCityName: new FormControl("none"),
    toCityName: new FormControl("none")
  })

  // bookRouteForm.value.toCityName = this.bookRouteForm.value.fromDropDown;
  // bookRouteForm.value.fromCityName = this.bookRouteForm.value.toDropDown;

  public fromCitiesArray: { name: string; isDisabled: boolean }[] = [
    {
      name: 'Delhi',
      isDisabled: false,
    },
    {
      name: 'Mumbai',
      isDisabled: false,
    },
    {
      name: 'Chandigarh',
      isDisabled: false,
    },
    {
      name: 'Bangalore',
      isDisabled: false,
    },
    {
      name: 'Hyderabad',
      isDisabled: false,
    },
    {
      name: 'Pune',
      isDisabled: false,
    },
  ];

  public toCitiesArray: { name: string; isDisabled: boolean }[] = [
    {
      name: 'Delhi',
      isDisabled: false,
    },
    {
      name: 'Mumbai',
      isDisabled: false,
    },
    {
      name: 'Chandigarh',
      isDisabled: false,
    },
    {
      name: 'Bangalore',
      isDisabled: false,
    },
    {
      name: 'Hyderabad',
      isDisabled: false,
    },
    {
      name: 'Pune',
      isDisabled: false,
    },
  ];

  public routes: { from: string; to: string }[] = [];

  resetFrom(): void {
    for (let i = 0; i < this.fromCitiesArray.length; i++) {
      this.fromCitiesArray[i].isDisabled = false;
    }
  }

  resetTo(): void {
    for (let i = 0; i < this.toCitiesArray.length; i++) {
      this.toCitiesArray[i].isDisabled = false;
    }
  }

  changeFromCityValue(): void {
    this.resetTo();

    let temp: string[] = [];
    for (let route of this.routes) {
      if (route.from === String(this.bookRouteForm.value.fromCityName)) {
        temp.push(route.to);
      }
    }
    temp.push(this.bookRouteForm.value.fromCityName);
    for (let toCityOption of this.toCitiesArray) {
      for (let val of temp) {
        if (toCityOption.name === val) {
          toCityOption.isDisabled = true;
        }
      }
    }
  }

  changeToCityValue(): void {
    this.resetFrom();

    let temp: string[] = [];
    for (let route of this.routes) {
      if (route.to === this.bookRouteForm.value.toCityName) {
        temp.push(route.from);
      }
    }
    temp.push(this.bookRouteForm.value.toCityName);
    for (let fromCityOption of this.fromCitiesArray) {
      for (let val of temp) {
        if (fromCityOption.name === val) {
          fromCityOption.isDisabled = true;
        }
      }
    }
  }

  saveRoute(): void {
    if (
      this.bookRouteForm.value.fromCityName === 'none' ||
      this.bookRouteForm.value.toCityName === 'none'
    ) {
      return;
    }

    this.routes.push({
      from: this.bookRouteForm.value.fromCityName,
      to: this.bookRouteForm.value.toCityName,
    });

    this.bookRouteForm.value.fromCityName = 'none';
    this.bookRouteForm.value.toCityName = 'none';

    this.resetFrom();
    this.resetTo();
    // console.log(this.reactiveForm.value)
  }

  clearSelections(): void {
    this.routes.length = 0;

    this.bookRouteForm.value.fromCityName = 'none';
    this.bookRouteForm.value.toCityName = 'none';

    this.resetTo();
    this.resetFrom();
  }
}
