import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toCityDropdownValue:string = "none";
  fromCityDropdownValue:string = "none";
  // disabled : boolean = false;
  // idx:any;

  // public cities:string[] = ["Delhi", "Mumbai", "Chandigarh", "Bangalore", "Hyderabad", "Pune"]

  newArray = [
    {
      name:"Delhi",
      isDisabled:false
    },
    {
      name:"Mumbai",
      isDisabled:false
    },
    {
      name:"Chandigarh",
      isDisabled:false
    },
    {
      name:"Bangalore",
      isDisabled:false
    },
    {
      name:"Hyderabad",
      isDisabled:false
    },
    {
      name:"Pune",
      isDisabled:false
    }
  ]

  public fromCitiesArray = this.newArray.slice()

  public toCitiesArray = this.newArray.slice()

  public routes = []

  changeFromCityValue(event:any){
    console.log(this.fromCityDropdownValue)
    console.log(this.toCityDropdownValue)
    
    for(let toCityOption of this.toCitiesArray){
      for(let route of this.routes){
        if(route.from===this.fromCityDropdownValue){
          if(toCityOption === route.to){
            toCityOption.isDisabled = true
          }
        }
      }
      if(toCityOption.name === this.fromCityDropdownValue){
        toCityOption.isDisabled = true
      }
    }
  }

  changeToCityValue(event:any){
    console.log(this.fromCityDropdownValue)
    console.log(this.toCityDropdownValue)

    for(let fromCityOption of this.fromCitiesArray){
      for(let route of this.routes){
        if(route.to===this.toCityDropdownValue){
          if(fromCityOption === route.from){
            fromCityOption.isDisabled = true
          }
        }
      }
      if(fromCityOption.name === this.toCityDropdownValue){
        fromCityOption.isDisabled = true
      }
    }
  }

  saveRoute(){
    if(this.fromCityDropdownValue==="none" || this.toCityDropdownValue==="none"){
      return
    }

    this.routes.push({
      from:this.fromCityDropdownValue,
      to: this.toCityDropdownValue,
      disabled: true
    })

    console.log(this.fromCitiesArray, this.newArray)

    this.fromCityDropdownValue = ""
    this.toCityDropdownValue = ""
    this.fromCitiesArray = this.newArray
    this.toCitiesArray = this.newArray


  }

  clearSelections(){
    this.routes.length = 0;
  }
}
