import { TestBed } from '@angular/core/testing';

import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';

describe('NgxLoginWithAmazonButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLoginWithAmazonButtonService = TestBed.get(NgxLoginWithAmazonButtonService);
    expect(service).toBeTruthy();
  });
});
