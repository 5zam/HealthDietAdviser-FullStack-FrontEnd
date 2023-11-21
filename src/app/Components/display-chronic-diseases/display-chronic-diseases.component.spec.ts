import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChronicDiseasesComponent } from './display-chronic-diseases.component';

describe('DisplayChronicDiseasesComponent', () => {
  let component: DisplayChronicDiseasesComponent;
  let fixture: ComponentFixture<DisplayChronicDiseasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayChronicDiseasesComponent]
    });
    fixture = TestBed.createComponent(DisplayChronicDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
