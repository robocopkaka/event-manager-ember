'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'event-manager',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      HOST: 'http://localhost:3001'
    },

    // contentSecurityPolicy: {
    //   'default-src': "'self'",
    //   'script-src': "'self'",
    //   'font-src': "'self' fonts.googleapis.com fonts.gstatic.com",
    //   'connect-src': "'self'",
    //   'img-src': "self",
    //   'style-src': "self",
    //   'media-src': "self"
    // }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.APP.HOST = 'https://shielded-citadel-82961.herokuapp.com/'
  }

  return ENV;
};
