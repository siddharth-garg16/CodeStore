import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';


describe('StudentService', () => {
  let service: StudentService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [StudentService]
    });
    service = TestBed.inject(StudentService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the data on GET request', ()=>{
    const service:StudentService = TestBed.get(StudentService);
    expect(service.getStudentsList).toBeTruthy();

  })
});
