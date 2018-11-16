import { TestBed, async, inject } from '@angular/core/testing';

import { AgeGuard } from './age.guard';

describe('AgeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeGuard]
    });
  });

  it('should ...', inject([AgeGuard], (guard: AgeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
