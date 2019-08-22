import DS from 'ember-data';
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { isPresent } from '@ember/utils';
import { inject as service } from '@ember/service'

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service(),
  host: 'http://localhost:3001',
  namespace: 'api/v1',

  authorize(xhr) {
    let { token } = this.get('session.data');
    if(isPresent(token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
  }
});
