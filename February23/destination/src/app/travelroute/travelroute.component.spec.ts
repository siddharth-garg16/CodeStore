import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelrouteComponent } from './travelroute.component';

describe('TravelrouteComponent', () => {
  let component: TravelrouteComponent;
  let fixture: ComponentFixture<TravelrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
