import { TestBed } from '@angular/core/testing';

import { EditAgentService } from './edit-agent.service';

describe('EditAgentService', () => {
  let service: EditAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
