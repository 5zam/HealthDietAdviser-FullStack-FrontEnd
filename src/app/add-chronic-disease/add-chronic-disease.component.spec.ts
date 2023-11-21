import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChronicDiseaseComponent } from './add-chronic-disease.component';

describe('AddChronicDiseaseComponent', () => {
  let component: AddChronicDiseaseComponent;
  let fixture: ComponentFixture<AddChronicDiseaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChronicDiseaseComponent]
    });
    fixture = TestBed.createComponent(AddChronicDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
