import { TestBed } from '@angular/core/testing';

import { BannerServiceService } from './banner-service.service';

describe('BannerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BannerServiceService = TestBed.get(BannerServiceService);
    expect(service).toBeTruthy();
  });
});
