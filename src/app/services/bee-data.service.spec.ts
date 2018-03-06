import { TestBed, inject } from '@angular/core/testing';

import { BeeDataService } from './bee-data.service';

describe('BeeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeeDataService]
    });
  });

  it('should be created', inject([BeeDataService], (service: BeeDataService) => {
    expect(service).toBeTruthy();
  }));
});
