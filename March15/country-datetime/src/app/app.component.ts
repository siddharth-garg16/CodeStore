import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from "moment";
import * as tz from "moment-timezone";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'country-datetime';
  localeDate;
  error="";
  receivedDate:Date;
  receivedCountryZone:string;
  // utc;

  countryDateForm = new FormGroup({
    country: new FormControl('none'),
    date: new FormControl('', Validators.required)
  })

  onSubmit():void{
    if(this.countryDateForm.value.country==="none"){
      this.error = "Both fields are mandatory.";
      return
    }
    this.receivedDate = new Date(this.countryDateForm.value.date);
    console.log(this.receivedDate)
    this.receivedCountryZone = this.countryDateForm.value.country;
    // this.utc = this.receivedDate.getTime()+(this.receivedDate.getTimezoneOffset()*60000)
    // this.localeDate = new Date(this.utc+(3600000*this.receivedCountryZone))
    this.localeDate = this.receivedDate.toLocaleString(this.receivedCountryZone);
  }
}
