import DS from 'ember-data'
import { decamelize } from '@ember/string'

export default DS.RESTSerializer.extend({
  keyForAttribute(key, method) {
    return decamelize(key)
  },

  normalizeResponse(type, resourceHash) {
    console.log(resourceHash)
  }
});
