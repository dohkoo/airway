import { TestBed } from '@angular/core/testing';

import { Decision } from './decision.service';

describe('Decision', () => {
  let service: Decision;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Decision);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
