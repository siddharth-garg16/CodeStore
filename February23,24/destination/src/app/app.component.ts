import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // toCityDropdownValue = "none";
  // fromCityDropdownValue = "none";

  // public fromCitiesArray: { name: string; isDisabled: boolean }[] = [
  //   {
  //     name: 'Delhi',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Mumbai',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Chandigarh',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Bangalore',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Hyderabad',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Pune',
  //     isDisabled: false,
  //   },
  // ];

  // public toCitiesArray: { name: string; isDisabled: boolean }[] = [
  //   {
  //     name: 'Delhi',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Mumbai',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Chandigarh',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Bangalore',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Hyderabad',
  //     isDisabled: false,
  //   },
  //   {
  //     name: 'Pune',
  //     isDisabled: false,
  //   },
  // ];

  // public routes: { from: string; to: string }[] = [];

  // resetFrom(): void {
  //   for (let i = 0; i < this.fromCitiesArray.length; i++) {
  //     this.fromCitiesArray[i].isDisabled = false;
  //   }
  // }

  // resetTo(): void {
  //   for (let i = 0; i < this.toCitiesArray.length; i++) {
  //     this.toCitiesArray[i].isDisabled = false;
  //   }
  // }

  // changeFromCityValue(): void {
  //   this.resetTo();

  //   let temp: string[] = [];
  //   for (let route of this.routes) {
  //     if (route.from === this.fromCityDropdownValue) {
  //       temp.push(route.to);
  //     }
  //   }
  //   temp.push(this.fromCityDropdownValue);
  //   for (let toCityOption of this.toCitiesArray) {
  //     for (let val of temp) {
  //       if (toCityOption.name === val) {
  //         toCityOption.isDisabled = true;
  //       }
  //     }
  //   }
  // }

  // changeToCityValue(): void {
  //   this.resetFrom();

  //   let temp: string[] = [];
  //   for (let route of this.routes) {
  //     if (route.to === this.toCityDropdownValue) {
  //       temp.push(route.from);
  //     }
  //   }
  //   temp.push(this.toCityDropdownValue);
  //   for (let fromCityOption of this.fromCitiesArray) {
  //     for (let val of temp) {
  //       if (fromCityOption.name === val) {
  //         fromCityOption.isDisabled = true;
  //       }
  //     }
  //   }
  // }

  // saveRoute(): void {
  //   if (
  //     this.fromCityDropdownValue === 'none' ||
  //     this.toCityDropdownValue === 'none'
  //   ) {
  //     return;
  //   }

  //   this.routes.push({
  //     from: this.fromCityDropdownValue,
  //     to: this.toCityDropdownValue,
  //   });

  //   this.fromCityDropdownValue = 'none';
  //   this.toCityDropdownValue = 'none';

  //   this.resetFrom();
  //   this.resetTo();
  // }

  // clearSelections(): void {
  //   this.routes.length = 0;

  //   this.fromCityDropdownValue = 'none';
  //   this.toCityDropdownValue = 'none';

  //   this.resetTo();
  //   this.resetFrom();
  // }

}
