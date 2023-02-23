import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cities:string[] = ["Delhi", "Mumbai", "Chandigarh", "Bangalore", "Hyderabad"]

  public routes = [
    {
      from:"",
      to:""
    }
  ]

  currFrom:string = "";
  currTo:string = "";

  onChangeFrom(fromVal){
    this.currFrom = fromVal.target.value
  }
  onChangeTo(toVal){
    this.currTo = toVal.target.value
  }

  saveAndHandleRoutes(){
    if(this.currFrom==="none" || this.currTo==="none" || this.currFrom === this.currTo){
      return
  }
    this.routes.push({
      from:this.currFrom,
      to: this.currTo
    })
  }

  clearSelections(){
    this.routes.splice(1)
  }

}
