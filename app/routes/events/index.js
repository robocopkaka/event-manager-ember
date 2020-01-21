import Route from '@ember/routing/route';
import { set, get } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.query('event', {include: 'address', page: 1});
  },
  afterModel(events) {
    set(this, 'meta', get(events, 'meta'))
    console.log(this.meta)
  }
});
