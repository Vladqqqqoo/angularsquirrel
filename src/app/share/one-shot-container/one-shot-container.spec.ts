import { TestBed } from '@angular/core/testing';

import { OneShotContainerService } from './one-shot-container.service';

describe('OneShotContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneShotContainerService = TestBed.get(OneShotContainerService);
    expect(service).toBeTruthy();
  });
});
