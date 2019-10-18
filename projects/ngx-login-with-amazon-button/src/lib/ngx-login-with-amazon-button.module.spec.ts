import { TestBed } from '@angular/core/testing';
import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';
import { NgxLoginWithAmazonButtonModule } from './ngx-login-with-amazon-button.module';
import { lwaSdkMock } from './test-injection-tokens';

describe('NgxLoginWithAmazonButtonModule', () => {
  xit('requires clientId argument in forRoot property', () => {
    try {
      TestBed.configureTestingModule({
        imports: [NgxLoginWithAmazonButtonModule.forRoot('')],
      });
    } catch (e) {
      expect(e.message).toEqual('clientId was not provided');
      return;
    }
    fail(
      'NgxLoginWithAmazonButtonModule.forRoot did not throw when clientId was not provided'
    );
  });

  it('resolves LWA_CLIENT_ID InjectionToken', () => {
    TestBed.configureTestingModule({
      imports: [NgxLoginWithAmazonButtonModule.forRoot('testId')],
      providers: [
        {
          provide: LWA_SDK_OBJECT,
          useValue: lwaSdkMock,
        },
      ],
    });
    expect(TestBed.get(LWA_CLIENT_ID)).toEqual('testId');
  });
});
