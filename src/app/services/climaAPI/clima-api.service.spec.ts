import { TestBed } from '@angular/core/testing';

import { ClimaAPIService } from './clima-api.service';

describe('ClimaAPIService', () => {
  let service: ClimaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
