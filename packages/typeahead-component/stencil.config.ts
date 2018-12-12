import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'typeaheadcomponent',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        skipWaiting: true
      }
    }
  ]
};
