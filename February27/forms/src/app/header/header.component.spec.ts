import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should check TD form link", () => {
    let anchorElement : HTMLElement = fixture.nativeElement;
    let text = anchorElement.querySelector('.link-td');
    expect(text.textContent).toEqual("Template-driven SignUp with Bootstrap")
  })

  it("should check TD form link", () => {
    let anchorElement : HTMLElement = fixture.nativeElement;
    let text = anchorElement.querySelector('.link-reactive');
    expect(text.textContent).toEqual("Reactive SignUp with Material")
  })
});
