import { TestBed } from '@angular/core/testing';

import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';
import { mockLwaSdkProviders, lwaSdkMock } from './test-injection-tokens';

describe('NgxLoginWithAmazonButtonService', () => {
  describe('with TestBed', () => {
    beforeEach(() =>
      TestBed.configureTestingModule({
        providers: mockLwaSdkProviders,
      })
    );

    it('should be created', () => {
      const service: NgxLoginWithAmazonButtonService = TestBed.get(
        NgxLoginWithAmazonButtonService
      );
      expect(service).toBeTruthy();
    });

    it('exposes LWA SDK', () => {
      const service: NgxLoginWithAmazonButtonService = TestBed.get(
        NgxLoginWithAmazonButtonService
      );
      expect(service.lwaSdk).toEqual(lwaSdkMock);
    });
  });

  describe('without TestBed', () => {
    it('throws error if clientId not provided', () => {
      expect(
        () => new NgxLoginWithAmazonButtonService({} as any, undefined)
      ).toThrowError(/clientId/);
    });
  });
});
