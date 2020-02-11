import DS from 'ember-data';
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { inject as service } from '@ember/service'
import { isPresent } from '@ember/utils';
import ENV from 'event-manager/config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service('session'),
  host: ENV.APP.HOST,
  namespace: 'api/v1',

  authorize(xhr) {
    let {token} = this.get('session.data.authenticated');
    if (isPresent(token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
  }
});
