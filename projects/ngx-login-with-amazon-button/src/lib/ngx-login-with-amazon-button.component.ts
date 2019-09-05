import { Component, OnInit, Input } from '@angular/core';

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
export class NgxLoginWithAmazonButtonComponent implements OnInit {
  @Input() height = 32;
  @Input() width = 156;
  /**
   * Possible choices for this can be found on the
   * [Login With Amazon docs](https://developer.amazon.com/docs/login-with-amazon/button.html#website-images)
   */
  @Input() src: string;
  constructor() {}

  ngOnInit() {}
}
