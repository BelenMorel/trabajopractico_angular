import { TestBed } from '@angular/core/testing';

import { NewcursosService } from './newcursos.service';

describe('NewcursosService', () => {
  let service: NewcursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewcursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
