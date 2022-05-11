import { TestBed } from '@angular/core/testing';

import { ObjectMapperService } from './object-mapper.service';

describe('ObjectMapperService', () => {
  let service: ObjectMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
