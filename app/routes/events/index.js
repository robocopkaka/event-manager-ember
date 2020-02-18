import Route from '@ember/routing/route';
import { tracked } from "@glimmer/tracking";

export default class IndexRoute extends Route {
  @tracked page = 1;
  meta = '';
  queryParams = {
    page: {
      refreshModel: true,
      replace: true
    },
    limit: {
      refreshModel: true
    }
  };

  model(params) {
    this.page = params.page;
    return this.store.query('event', {include: 'address',
      page: this.page,
      limit: params.limit,
    });
  }
}
