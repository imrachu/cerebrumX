import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSummaryComponent } from './vehicle-summary.component';

describe('VehicleSummaryComponent', () => {
  let component: VehicleSummaryComponent;
  let fixture: ComponentFixture<VehicleSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
