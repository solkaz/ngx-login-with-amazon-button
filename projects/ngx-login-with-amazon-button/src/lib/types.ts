/**
 * The shape of the Login with Amazon SDK,
 * which is located at the `amazon.Login` namespace.
 * Because it is a namespace, the SDK cannot be extended.
 */
export type LwaSdkNamespaceType = typeof amazon.Login;

/**
 * Abstract class that mimics the Login with Amazon SDK. Needed for AOT.
 * Setting the type of `lwaSdk` parameter in the service's constructor
 * would result in an error when compiling with `ngc`.
 * Relevant issue: https://github.com/angular/angular/issues/12631
 */
export abstract class AbstractLwaSdk implements LwaSdkNamespaceType {
  abstract setClientId(clientId: string);
  abstract getClientId(): string;
  abstract authorize(options, next);
  abstract setSandboxMode();
  abstract setSiteDomain();
  abstract setUseCookie();
  abstract retrieveProfile();
  abstract logout(): void;
}
