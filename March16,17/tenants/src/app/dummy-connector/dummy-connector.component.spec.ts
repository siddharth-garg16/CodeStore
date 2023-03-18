import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyConnectorComponent } from './dummy-connector.component';

describe('DummyConnectorComponent', () => {
  let component: DummyConnectorComponent;
  let fixture: ComponentFixture<DummyConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyConnectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
