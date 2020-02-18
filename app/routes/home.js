import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  model() {
    return this.store.query('event', {
      include: 'address',
      limit: 3
    });
  }
}
