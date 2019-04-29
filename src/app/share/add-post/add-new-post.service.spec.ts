import { TestBed } from '@angular/core/testing';

import { AddNewPostService } from './add-new-post.service';

describe('AddNewPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewPostService = TestBed.get(AddNewPostService);
    expect(service).toBeTruthy();
  });
});
