import { TestBed } from '@angular/core/testing';

import { BasicPhoneService } from './basic-phone.service';

describe('BasicPhoneService', () => {
  let service: BasicPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
