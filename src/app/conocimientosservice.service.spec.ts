import { TestBed } from '@angular/core/testing';

import { ConocimientosserviceService } from './conocimientosservice.service';

describe('ConocimientosserviceService', () => {
  let service: ConocimientosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConocimientosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
