import { TestBed } from '@angular/core/testing';

import { MainContainerService } from './main-container.service';

describe('MainContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainContainerService = TestBed.get(MainContainerService);
    expect(service).toBeTruthy();
  });
});
