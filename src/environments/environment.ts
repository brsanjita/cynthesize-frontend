// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// `.env.ts` is generated by the `npm run env` command

export const environment = {
  production: false,
  version: '1.0.0-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US']
};
export const HASURA_ACCESS_KEY = 'extra_secret';
export const GRAPHQL_URL = 'https://cynthesize-pre-prod.herokuapp.com/v1alpha1/graphql';
export const REALTIME_GRAPHQL_URL = 'wss://cynthesize-back.herokuapp.com/v1alpha1/graphql';
export const authClientId = 'tEbTH2wRl3dHtWZ0m4nqoWPsN1GIu9dQ';
export const authDomain = 'cynthesize.auth0.com';
export const auth0Audience = 'https://cynthesize.auth0.com/userinfo';
export const callbackUrl = 'http://localhost:4200';
