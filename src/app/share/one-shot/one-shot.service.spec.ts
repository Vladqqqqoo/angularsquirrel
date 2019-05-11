import { TestBed } from '@angular/core/testing';

import { OneShotService } from './one-shot.service';

describe('OneShotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneShotService = TestBed.get(OneShotService);
    expect(service).toBeTruthy();
  });
});
