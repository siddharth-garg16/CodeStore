import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatError } from '@angular/material/form-field';

import { ReactiveSignupComponent } from './reactive-signup.component';

describe('ReactiveSignupComponent', () => {
  let component: ReactiveSignupComponent;
  let fixture: ComponentFixture<ReactiveSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSignupComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("required field in the form", () => {
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      const fullnameElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#nameInput");
      fullnameElement.value = "";
      fullnameElement.dispatchEvent(new Event('input'));

      const emailElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#emailInput");
      emailElement.value = "";
      emailElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(()=>{
        const nameValidator: HTMLSpanElement = fixture.debugElement.nativeElement.querySelector("#name-error");
        expect(nameValidator.innerHTML).toEqual("Entered name must only contain alphabetical characters.")

        const emailValidator: HTMLSpanElement = fixture.debugElement.nativeElement.querySelector("#email-error");
        expect(emailValidator.innerHTML).toEqual("Enter a valid email address.")
      })
    })
  })
});
