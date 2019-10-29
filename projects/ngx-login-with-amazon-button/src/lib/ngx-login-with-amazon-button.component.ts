import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';

/**
 * Renders a button that implements Login With Amazon functionality.
 * @example
 * <lwa-button src="https://your-button-source" (authorize)="handleAuthorize($event)"></lwa-button>
 */
@Component({
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
   *  Height of the button. Defaults to `32`.
   */
  @Input() height = 32;
  /**
   *  Width of the button. Defaults to `156`.
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
   * Providing this value will cause the `authorize` output to not be triggered.
   */
  @Input() nextUrl?: string;

  /**
   * Options to use when authorizing a user (with `amazon.Login.authorize`).
   * The default options will ask for every scope (all are marked as unessential).
   */
  @Input() options: AuthorizeOptions = {
    scope: ['postal_code', 'profile', 'profile:user_id'],
    scope_data: {
      profile: { essential: false },
      postal_code: { essential: false },
      'profile:user_id': { essential: false },
    },
  };

  /**
   * Emits when `amazon.Login.authorize` is successful.
   * If `nextUrl` is provided, this will not emit.
   */
  @Output() authorize = new EventEmitter<AuthorizeRequest>();

  constructor(private lwa: NgxLoginWithAmazonButtonService) {}

  /**
   * @ignore
   */
  handleOnClick = () => {
    this.lwa.sdk.authorize(
      this.options,
      this.nextUrl || this.handleOnAuthorize
    );
  }

  /**
   * @ignore
   */
  handleOnAuthorize = (event: AuthorizeRequest) => {
    // This method will be called if the user declines to grant permission,
    // so check that an error didn't occur.
    if (event.error === undefined) {
      this.authorize.emit(event);
    } else {
      // TODO Emit error through output instead of logging to console
      // so users can actually respond to errors.
      console.error(
        `Error occurred: ${event.error} - ${event.error_description}`
      );
    }
  }
}
