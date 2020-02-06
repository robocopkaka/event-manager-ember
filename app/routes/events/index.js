import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  page: 1,
  meta: '',
  queryParams: {
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },
  model(params) {
    set(this, 'page', params.page);
    return this.store.query('event', {include: 'address',
      page: params.page,
      limit: params.limit,
    });
  }
});
