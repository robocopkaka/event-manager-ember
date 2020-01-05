import DS from 'ember-data';
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { inject as service } from '@ember/service'
import { isPresent } from '@ember/utils';
import { camelize } from '@ember/string';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service('session'),
  host: 'http://localhost:3001',
  namespace: 'api/v1',

  authorize(xhr) {
    let {token} = this.get('session.data.authenticated');
    if (isPresent(token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
  }
});
