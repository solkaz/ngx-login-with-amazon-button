import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoginWithAmazonButtonComponent } from './ngx-login-with-amazon-button.component';
import { Component } from '@angular/core';
import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';
import { mockLwaSdkProviders, lwaSdkMock } from './test-injection-tokens';

function queryAmazonButton(el: HTMLElement) {
  return el.querySelector('#LoginWithAmazon') as HTMLAnchorElement;
}

function queryAmazonButtonImage(el: HTMLElement) {
  return queryAmazonButton(el).querySelector('img') as HTMLImageElement;
}

describe('NgxLoginWithAmazonButtonComponent', () => {
  beforeEach(() => {
    (lwaSdkMock.authorize as jasmine.Spy).calls.reset();
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: mockLwaSdkProviders.concat([NgxLoginWithAmazonButtonService]),
    });
  }));

  describe('Standalone tests', () => {
    let component: NgxLoginWithAmazonButtonComponent;
    let fixture: ComponentFixture<NgxLoginWithAmazonButtonComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NgxLoginWithAmazonButtonComponent],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NgxLoginWithAmazonButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('has default width and height values', () => {
      const button = queryAmazonButtonImage(fixture.nativeElement);
      expect(button.width).toBe(156);
      expect(button.height).toBe(32);
    });

    it('uses options when calling authorize', () => {
      const authorizeSpy = lwaSdkMock.authorize as jasmine.Spy;
      component.handleOnClick();
      expect(authorizeSpy).toHaveBeenCalledTimes(1);
      expect(authorizeSpy.calls.mostRecent().args[0]).toEqual({
        scope: ['postal_code', 'profile', 'profile:user_id'],
        scope_data: jasmine.anything(),
      } as AuthorizeOptions);
      const options: AuthorizeOptions = {
        scope: ['profile:user_id'],
      };
      component.options = options;
      component.handleOnClick();
      expect(authorizeSpy).toHaveBeenCalledTimes(2);
      expect(authorizeSpy.calls.mostRecent().args[0]).toBe(options);
    });
  });

  describe('Integration tests', () => {
    const src = 'https://via.placeholder.com/50';
    @Component({
      template: `
        <lwa-button
          [width]="width"
          [height]="height"
          [src]="src"
          (authorize)="spy($event)"
          [nextUrl]="nextUrl"
        ></lwa-button>
      `,
    })
    class TestHostComponent {
      width = 50;
      height = 50;
      src = src;
      nextUrl = '';
      spy = jasmine.createSpy();
    }

    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NgxLoginWithAmazonButtonComponent, TestHostComponent],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('accepts width and height inputs', () => {
      const button = queryAmazonButtonImage(fixture.nativeElement);
      expect(button.width).toBe(50);
      expect(button.height).toBe(50);
      component.height = 100;
      component.width = 100;
      fixture.detectChanges();
      expect(button.width).toBe(100);
      expect(button.height).toBe(100);
    });

    it('accepts image src input', () => {
      const button = queryAmazonButtonImage(fixture.nativeElement);
      expect(button.src).toEqual(src);
      const newSrc = 'https://via.placeholder.com/149';
      button.src = newSrc;
      fixture.detectChanges();
      expect(button.src).toEqual(newSrc);
    });

    describe('authorize output', () => {
      it('doesn\'t emit if nextUrl input is provided', () => {
        component.nextUrl = 'foo';
        fixture.detectChanges();
        expect(component.spy).not.toHaveBeenCalled();
        queryAmazonButton(fixture.nativeElement).click();
        fixture.detectChanges();
        expect(component.spy).toHaveBeenCalledTimes(0);
      });

      it('emits authorize event after successful authorization', () => {
        expect(component.spy).not.toHaveBeenCalled();
        queryAmazonButton(fixture.nativeElement).click();
        fixture.detectChanges();
        expect(component.spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
