import { TestBed } from '@angular/core/testing';

import { AuthinticationService } from './authintication.service';

describe('AuthinticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthinticationService = TestBed.get(AuthinticationService);
    expect(service).toBeTruthy();
  });
});
