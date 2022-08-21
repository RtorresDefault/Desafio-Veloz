import { TestBed } from '@angular/core/testing';

import { PetshopService } from './remote-service.service';

describe('PetshopService', () => {
  let service: PetshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
