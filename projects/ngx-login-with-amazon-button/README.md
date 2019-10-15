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
  imports: [NgxLoginWithAmazonButtonModule.forRoot("YOUR_CLIENT_ID")],
  providers: [
    {
      provide: LWA_SDK_OBJECT,
      useValue: amazon.Login,
    },
  ],
  // ...
})
export class AppModule {}
```

TODO:

```

<lwa-button
 src="https://your-button-source"
 (authorize)="handleAuthorize($event)">
</lwa-button>
```

## API

TODO

## Testing

TODO

- Have to provide mock values for `LWA_CLIENT_ID` and `LWA_SDK_OBJECT`
- Show how to create simple mock for `LWA_SDK_OBJECT`

```ts
jasmine.createSpyObj("sdk", [
  // `authorize` and `setClientId` are required for the button to fully function.
  "authorize",
  "setClientId",
  // Define other methods as needed (`getClientId`, `retrieveUserProfile`, etc.)
]);
```

## License

[MIT](./LICENSE)
