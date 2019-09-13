import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoginWithAmazonButtonComponent } from './ngx-login-with-amazon-button.component';
import { Component } from '@angular/core';
import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';
import { LWA_CLIENT_ID, LWA_SDK_OBJECT } from './injection-tokens';

const providers = [
  {
    provide: LWA_CLIENT_ID,
    useValue: 'testId',
  },
  {
    provide: LWA_SDK_OBJECT,
    useValue: jasmine.createSpyObj('lwaSdk', ['authorize', 'setClientId']),
  },
  NgxLoginWithAmazonButtonService,
];
describe('NgxLoginWithAmazonButtonComponent', () => {
  describe('Standalone tests', () => {
    let component: NgxLoginWithAmazonButtonComponent;
    let fixture: ComponentFixture<NgxLoginWithAmazonButtonComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NgxLoginWithAmazonButtonComponent],
        providers,
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NgxLoginWithAmazonButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('has a default width and height for the button', () => {
      const button = (fixture.nativeElement as HTMLElement)
        .querySelector('a')
        .querySelector('img');
      expect(button.width).toBe(156);
      expect(button.height).toBe(32);
    });
  });

  describe('Integration tests', () => {
    const src = 'https://via.placeholder.com/50';
    @Component({
      template: `
        <lwa-button [width]="width" [height]="height" [src]="src"> </lwa-button>
      `,
    })
    class TestHostComponent {
      width = 50;
      height = 50;
      src = src;
    }

    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NgxLoginWithAmazonButtonComponent, TestHostComponent],
        providers,
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('has an <a> element with a `LoginWithAmazon` id', () => {
      expect((fixture.nativeElement as HTMLElement).querySelector('a').id).toBe(
        'LoginWithAmazon'
      );
    });

    it('accepts width and height inputs', () => {
      const button = (fixture.nativeElement as HTMLElement)
        .querySelector('a')
        .querySelector('img');
      expect(button.width).toBe(50);
      expect(button.height).toBe(50);
      component.height = 100;
      component.width = 100;
      fixture.detectChanges();
      expect(button.width).toBe(100);
      expect(button.height).toBe(100);
    });

    it('accepts image src input', () => {
      const button = (fixture.nativeElement as HTMLElement)
        .querySelector('a')
        .querySelector('img');
      expect(button.src).toEqual(src);
      const newSrc = 'https://via.placeholder.com/149';
      button.src = newSrc;
      fixture.detectChanges();
      expect(button.src).toEqual(newSrc);
    });
  });
});
