import { Component, OnInit, Input } from '@angular/core';
import { NgxLoginWithAmazonButtonService } from './ngx-login-with-amazon-button.service';

@Component({
  selector: 'lwa-button',
  template: `
    <a href id="LoginWithAmazon">
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
export class NgxLoginWithAmazonButtonComponent  {
  @Input() height = 32;
  @Input() width = 156;
  /**
   * Possible choices for this can be found on the
   * [Login With Amazon docs](https://developer.amazon.com/docs/login-with-amazon/button.html#website-images)
   */
  @Input() src: string;
  /**
   * If specified, will be passed to `authorize` as the `next` argument,
   * which will route the user to `nextUrl` if successfully authorized.
   */
  @Input() nextUrl?: string;
  constructor(private lwa: NgxLoginWithAmazonButtonService) {}

}
