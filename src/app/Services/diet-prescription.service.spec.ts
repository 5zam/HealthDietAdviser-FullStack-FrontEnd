import { TestBed } from '@angular/core/testing';

import { DietPrescriptionService } from './diet-prescription.service';

describe('DietPrescriptionService', () => {
  let service: DietPrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietPrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
