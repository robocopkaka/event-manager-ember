import DS from 'ember-data';
import { decamelize } from '@ember/string'

export default DS.RESTSerializer.extend({
  keyForAttribute(key) {
    return decamelize(key);
  },

  keyForRelationship(key, relationship, method) {
    if (relationship === 'belongsTo') {
      return `${key}_id`
    }

    return this._super(...arguments);
  }
});
