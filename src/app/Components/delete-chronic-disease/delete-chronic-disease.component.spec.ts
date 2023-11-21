import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChronicDiseaseComponent } from './delete-chronic-disease.component';

describe('DeleteChronicDiseaseComponent', () => {
  let component: DeleteChronicDiseaseComponent;
  let fixture: ComponentFixture<DeleteChronicDiseaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteChronicDiseaseComponent]
    });
    fixture = TestBed.createComponent(DeleteChronicDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
