import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'typeaheadcomponent',
  outputTargets: [
    {
      baseUrl: 'http://app.base/',
      type: 'www',
      serviceWorker: {
        skipWaiting: true
      }
    }
  ]
};
