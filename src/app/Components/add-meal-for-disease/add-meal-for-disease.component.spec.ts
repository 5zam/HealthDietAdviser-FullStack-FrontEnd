import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealForDiseaseComponent } from './add-meal-for-disease.component';

describe('AddMealForDiseaseComponent', () => {
  let component: AddMealForDiseaseComponent;
  let fixture: ComponentFixture<AddMealForDiseaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMealForDiseaseComponent]
    });
    fixture = TestBed.createComponent(AddMealForDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
