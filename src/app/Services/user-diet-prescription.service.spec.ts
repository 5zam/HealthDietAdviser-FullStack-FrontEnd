import { TestBed } from '@angular/core/testing';

import { UserDietPrescriptionService } from './user-diet-prescription.service';

describe('UserDietPrescriptionService', () => {
  let service: UserDietPrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDietPrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
