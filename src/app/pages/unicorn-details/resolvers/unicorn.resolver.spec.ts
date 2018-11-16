import { TestBed } from '@angular/core/testing';

import { UnicornResolver } from './unicorn.resolver';

describe('UnicornService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnicornResolver = TestBed.get(UnicornResolver);
    expect(service).toBeTruthy();
  });
});
