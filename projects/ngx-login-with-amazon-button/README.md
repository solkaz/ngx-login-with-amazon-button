# NgxLoginWithAmazonButton

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

Include the `NgxLoginWithAmazonButtonModule` in the `imports` when declaring an Angular module, as well as providing the following values:

- `LWA_CLIENT_ID` - Client ID for your application. This must be provided.
- `LWA_SDK_OBJECT` - Object that has the Login with Amazon SDK methods.

Example:

```ts
import { NgModule } from "@angular/core";
import {
  LWA_CLIENT_ID,
  LWA_SDK_OBJECT,
  NgxLoginWithAmazonButtonModule,
} from "ngx-login-with-amazon-button";

@NgModule({
  // ...
  imports: [NgxLoginWithAmazonButtonModule],
  providers: [
    {
      provide: LWA_CLIENT_ID,
      useValue: "myClientId",
    },
    {
      provide: LWA_SDK_OBJECT,
      useValue: amazon.Login,
    },
  ],
  // ...
})
export class AppModule {}
```

## Testing

TODO

## License

[MIT](./LICENSE)
