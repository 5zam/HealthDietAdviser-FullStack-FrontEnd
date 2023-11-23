import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsForDiseaseComponent } from './meals-for-disease.component';

describe('MealsForDiseaseComponent', () => {
  let component: MealsForDiseaseComponent;
  let fixture: ComponentFixture<MealsForDiseaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsForDiseaseComponent]
    });
    fixture = TestBed.createComponent(MealsForDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
