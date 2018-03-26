import { TestBed, inject } from '@angular/core/testing';

import { PortfolioApiDataService } from './portfolio-api-data.service';

describe('PortfolioApiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioApiDataService]
    });
  });

  it('should be created', inject([PortfolioApiDataService], (service: PortfolioApiDataService) => {
    expect(service).toBeTruthy();
  }));
});
