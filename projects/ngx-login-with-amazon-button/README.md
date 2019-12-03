# NgxLoginWithAmazonButton

Angular integration with the [Login With Amazon Web SDK](https://developer.amazon.com/docs/login-with-amazon/web-docs.html).

[Live Example](https://ngx-login-with-amazon-button.netlify.com/example/)

[Online Documentation](https://ngx-login-with-amazon-button.netlify.com/docs/)

## Installation

You need to include `@types/login-with-amazon-sdk-browser` in `devDependencies`:

NPM:

```sh
npm install -D @types/login-with-amazon-sdk-browser
npm install ngx-login-with-amazon-button
```

Yarn:

```sh
yarn add -D @types/login-with-amazon-sdk-browser
yarn add ngx-login-with-amazon-button
```

### Login with Amazon SDK Installation

Refer to the [Login with Amazon documentation](https://developer.amazon.com/docs/login-with-amazon/web-docs.html).

### Usage

You will need a client ID from the Amazon Developer Console. If you don't already have an application registered, please follow [the documentation from Amazon](https://developer.amazon.com/docs/login-with-amazon/register-web.html).

Include the `NgxLoginWithAmazonButtonModule` in the `imports` when declaring an Angular module by calling the static `forRoot` method with your `clientId` for the application.

Example:

```ts
import { NgModule } from "@angular/core";
import { NgxLoginWithAmazonButtonModule } from "ngx-login-with-amazon-button";

@NgModule({
  // ...
  imports: [NgxLoginWithAmazonButtonModule.forRoot("YOUR_CLIENT_ID")]
  // ...
})
export class AppModule {}
```

You can then include the `lwa-button` element in your HTML templates. It exposes the `authorize` event that will occur after successfully authorizing the user, and will respond with a `AccessTokenRequest` or `CodeRequest`

Example:

```html
<lwa-button
  src="https://your-button-image-source"
  (authorize)="handleAuthorize($event)"
  [options]="{ scope: ['profile'] }"
>
</lwa-button>
```

## License

[MIT](./LICENSE)
