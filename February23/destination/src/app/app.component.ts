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

  public fromCitiesArray = [
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

  public toCitiesArray = [
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

  public routes = []

  resetFrom(){
    for(let i=0; i<this.fromCitiesArray.length; i++){
      this.fromCitiesArray[i].isDisabled = false;
    }
  }

  resetTo(){
    for(let i=0; i<this.toCitiesArray.length; i++){
      this.toCitiesArray[i].isDisabled = false;
    }
  }

  changeFromCityValue(event:any){
    console.log(this.fromCityDropdownValue)
    console.log(this.toCityDropdownValue)
    
    // for(let toCityOption of this.toCitiesArray){
    //   for(let route of this.routes){
    //     if(route.from===this.fromCityDropdownValue && route.to===toCityOption.name){
    //         toCityOption.isDisabled = true
    //       }
    //   }
    //   if(toCityOption.name === this.fromCityDropdownValue){
    //     this.resetTo()
    //     toCityOption.isDisabled = true
    //   }
    // }
    let temp = []
    for(let route of this.routes){
      if(route.from === this.fromCityDropdownValue){
        temp.push(route.to)
      }
    }
    temp.push(this.fromCityDropdownValue)
    for(let toCityOption of this.toCitiesArray){
      for(let val of temp){
        if(toCityOption.name === val){
          toCityOption.isDisabled = true
        }
      }
    }
  }

  changeToCityValue(event:any){
    console.log(this.fromCityDropdownValue)
    console.log(this.toCityDropdownValue)

    // for(let fromCityOption of this.fromCitiesArray){
    //   for(let route of this.routes){
    //     if(route.to===this.toCityDropdownValue && route.from===fromCityOption.name){
    //         fromCityOption.isDisabled = true
    //     }
    //   }
    //   if(fromCityOption.name === this.toCityDropdownValue){
    //     this.resetFrom()
    //     fromCityOption.isDisabled = true
    //   }
    // }
    let temp = []
    for(let route of this.routes){
      if(route.to === this.toCityDropdownValue){
        temp.push(route.from)
      }
    }
    temp.push(this.toCityDropdownValue)
    for(let fromCityOption of this.fromCitiesArray){
      for(let val of temp){
        if(fromCityOption.name === val){
          fromCityOption.isDisabled = true
        }
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


    this.fromCityDropdownValue = "none"
    this.toCityDropdownValue = "none"

    this.resetFrom()
    this.resetTo()

  }

  clearSelections(){
    this.routes.length = 0;

    this.fromCityDropdownValue = "none"
    this.toCityDropdownValue = "none"

    this.resetTo()
    this.resetFrom()
  }
}
