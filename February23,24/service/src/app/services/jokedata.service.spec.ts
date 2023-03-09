import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { JokedataService } from './jokedata.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('JokedataService', () => {
  let service: JokedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[JokedataService]
    });
  });

  it('should be created', () => {
    const service: JokedataService = TestBed.get(JokedataService)
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: JokedataService = TestBed.get(JokedataService);
    expect(service.getJokes).toBeTruthy();
   });
});
