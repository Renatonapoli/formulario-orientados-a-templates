import { TestBed } from '@angular/core/testing';

import { ConsultaServiceService } from './consulta-service.service';

describe('ConsultaServiceService', () => {
  let service: ConsultaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
