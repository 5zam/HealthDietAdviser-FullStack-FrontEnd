import { TestBed } from '@angular/core/testing';

import { UserChronicDiseaseService } from './user-chronic-disease.service';

describe('UserChronicDiseaseService', () => {
  let service: UserChronicDiseaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserChronicDiseaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
