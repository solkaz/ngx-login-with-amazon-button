import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';
import { NgxLoginWithAmazonButtonComponent } from './ngx-login-with-amazon-button.component';
import { NgxLoginWithAmazonButtonModule } from './ngx-login-with-amazon-button.module';
import { sdkMock } from './test-injection-tokens';

describe('NgxLoginWithAmazonButtonModule', () => {
  it('resolves LWA_CLIENT_ID InjectionToken', () => {
    TestBed.configureTestingModule({
      imports: [NgxLoginWithAmazonButtonModule.forRoot('testId')],
      providers: [
        {
          provide: LWA_SDK_OBJECT,
          useValue: sdkMock,
        },
      ],
    });
    expect(TestBed.get(LWA_CLIENT_ID)).toEqual('testId');
  });

  it('exports NgxLoginWithAmazonButtonComponent', () => {
    @Component({
      template: `
        <lwa-button></lwa-button>
      `,
    })
    class TestHostComponent {}
    return TestBed.configureTestingModule({
      imports: [NgxLoginWithAmazonButtonModule.forRoot('testId')],
      providers: [
        {
          provide: LWA_SDK_OBJECT,
          useValue: sdkMock,
        },
      ],
      declarations: [TestHostComponent],
    })
      .compileComponents()
      .then(() => {
        const fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
        expect(
          fixture.debugElement.query(
            By.directive(NgxLoginWithAmazonButtonComponent)
          )
        ).toBeDefined();
      });
  });
});
