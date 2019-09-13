import { TestBed } from '@angular/core/testing';

import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';
import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';

type LwaSdk = typeof amazon.Login;
const lwaSdkMock: LwaSdk = jasmine.createSpyObj<LwaSdk>('lwaSdk', [
  'authorize',
  'setClientId',
]);

describe('NgxLoginWithAmazonButtonService', () => {
  describe('with TestBed', () => {
    beforeEach(() =>
      TestBed.configureTestingModule({
        providers: [
          {
            provide: LWA_CLIENT_ID,
            useValue: 'myClientId',
          },
          {
            provide: LWA_SDK_OBJECT,
            useValue: lwaSdkMock,
          },
        ],
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
