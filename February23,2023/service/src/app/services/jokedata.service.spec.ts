import { TestBed } from '@angular/core/testing';

import { JokedataService } from './jokedata.service';

describe('JokedataService', () => {
  let service: JokedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
