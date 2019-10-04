import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';

/**
 * Renders a button that implements Login With Amazon functionality.
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'lwa-button',
  template: `
    <a id="LoginWithAmazon" (click)="handleOnClick()">
      <img
        [src]="src"
        [width]="width"
        [height]="height"
        alt="Login with Amazon"
        border="0"
      />
    </a>
  `,
  styles: [],
})
export class NgxLoginWithAmazonButtonComponent {
  /**
   *  Height of the button. Defaults to `32`;
   */
  @Input() height = 32;
  /**
   *  Width of the button. Defaults to `156`;
   */
  @Input() width = 156;
  /**
   * Image source of the button.
   * Possible choices for this can be found on the
   * [Login With Amazon docs](https://developer.amazon.com/docs/login-with-amazon/button.html#website-images)
   */
  @Input() src: string;
  /**
   * If specified, will be passed to `authorize` as the `next` argument,
   * which will route the user to `nextUrl` if successfully authorized.
   * This will cause the `authorize` output to not be triggered.
   */
  @Input() nextUrl?: string;

  /**
   * Passed as the first parameter to `amazon.Login.authorize`.
   * Defaults to `{ scope: ['postal_code', 'profile', 'profile:user_id'] }`
   */
  @Input() options: AuthorizeOptions = {
    scope: ['postal_code', 'profile', 'profile:user_id'],
  };

  /**
   * Emits when `amazon.Login.authorize` is successful.
   * If `nextUrl` is provided, this will not emit.
   */
  @Output() authorize = new EventEmitter<AuthorizeRequest>();

  constructor(private lwa: NgxLoginWithAmazonButtonService) {}

  handleOnClick = () => {
    this.lwa.lwaSdk.authorize(
      this.options,
      this.nextUrl || this.handleOnAuthorize
    );
  }

  handleOnAuthorize = (event: AuthorizeRequest) => {
    this.authorize.emit(event);
  }
}
