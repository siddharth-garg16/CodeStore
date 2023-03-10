import { AbstractControl } from '@angular/forms';

export function ValidateName(control: AbstractControl) {
  let enteredName:string = control.value;
  if (control.value.trim().length === 0) {
    return { invalidName: true };
  }
  for(let i=0; i<enteredName.length; i++){
    if(!isNaN(parseInt(enteredName[i]))){
        return { invalidName: true }
    }
  }
  return null;
}