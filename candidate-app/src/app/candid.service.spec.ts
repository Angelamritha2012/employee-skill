import { TestBed } from '@angular/core/testing';

import { CandidService } from './candid.service';

describe('CandidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidService = TestBed.get(CandidService);
    expect(service).toBeTruthy();
  });
});
