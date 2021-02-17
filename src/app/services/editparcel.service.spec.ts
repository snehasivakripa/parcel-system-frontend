import { TestBed } from '@angular/core/testing';

import { EditparcelService } from './editparcel.service';

describe('EditparcelService', () => {
  let service: EditparcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditparcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
