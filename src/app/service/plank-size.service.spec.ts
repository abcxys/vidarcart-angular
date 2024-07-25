import { TestBed } from '@angular/core/testing';

import { PlankSizeService } from '././plank-size.service';

describe('PlankSizeServiceService', () => {
  let service: PlankSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlankSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
