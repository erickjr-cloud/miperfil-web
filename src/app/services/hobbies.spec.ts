import { TestBed } from '@angular/core/testing';

import { Hobbies } from './hobbies';

describe('Hobbies', () => {
  let service: Hobbies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hobbies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
