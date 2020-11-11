import { TestBed } from '@angular/core/testing';

import { CatnewsService } from './catnews.service';

describe('CatnewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatnewsService = TestBed.get(CatnewsService);
    expect(service).toBeTruthy();
  });
});
