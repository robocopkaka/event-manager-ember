import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('bookings');
  this.route('events', function() {
    this.route('show', { path: '/:id' });
    this.route('create');
  });
  this.route('login');
  this.route('home', { path: '/' });
});
