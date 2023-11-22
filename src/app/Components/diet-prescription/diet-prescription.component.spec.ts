import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPrescriptionComponent } from './diet-prescription.component';

describe('DietPrescriptionComponent', () => {
  let component: DietPrescriptionComponent;
  let fixture: ComponentFixture<DietPrescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietPrescriptionComponent]
    });
    fixture = TestBed.createComponent(DietPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
