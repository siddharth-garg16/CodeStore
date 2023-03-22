import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{
  @ViewChild('dobInput', {static: false, read: ElementRef}) dateOfBirth: ElementRef;
  @ViewChild('ageInput', {static: false, read: ElementRef}) age: ElementRef;

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let calculatedAge = currentYear - birthYear;
    this.age.nativeElement.value = calculatedAge;
  }
}
