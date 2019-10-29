import * as values from './values.json';

if (!values.clientId) {
  throw new Error('clientId was not set in the environment variables.');
}

export { values };
