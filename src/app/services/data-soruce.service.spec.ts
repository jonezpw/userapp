import { TestBed } from '@angular/core/testing';

import { DataSoruceService } from './data-soruce.service';

describe('DataSoruceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSoruceService = TestBed.get(DataSoruceService);
    expect(service).toBeTruthy();
  });
});
