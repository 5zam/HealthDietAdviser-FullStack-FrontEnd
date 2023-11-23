import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListByDiseaseComponent } from './meal-list-by-disease.component';

describe('MealListByDiseaseComponent', () => {
  let component: MealListByDiseaseComponent;
  let fixture: ComponentFixture<MealListByDiseaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealListByDiseaseComponent]
    });
    fixture = TestBed.createComponent(MealListByDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
