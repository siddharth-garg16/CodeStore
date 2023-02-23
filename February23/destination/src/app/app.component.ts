import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toCityDropdownValue:string = "";
  fromCityDropdownValue:string = "";
  disabled : boolean = false;
  idx:any;

  public cities:string[] = ["Delhi", "Mumbai", "Chandigarh", "Bangalore", "Hyderabad"]

  public routes = []

  changeFromCityValue(event:any){
    console.log(this.fromCityDropdownValue)
    console.log(event)
    this.idx = this.cities.indexOf(this.fromCityDropdownValue)
  }

  changeToCityValue(event:any){
    console.log(this.toCityDropdownValue)
    console.log(event)
    this.idx = this.cities.indexOf(this.toCityDropdownValue)
  }

  saveRoute(){
    if(this.fromCityDropdownValue==="none" || this.toCityDropdownValue==="none"){
      return
    }

    this.routes.push({
      from:this.fromCityDropdownValue,
      to: this.toCityDropdownValue
    })
  }

  clearSelections(){
    this.routes.length = 0;
  }
}
