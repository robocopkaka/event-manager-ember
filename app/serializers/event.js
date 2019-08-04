import DS from 'ember-data';
import { decamelize } from '@ember/string'


export default DS.RESTSerializer.extend({
  // primaryKey: 'id',
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    delete payload.message;
    payload.events = payload.data.events;
    delete payload.data;

    return this._super(...arguments);
  },
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    delete payload.message;
    payload.event = payload.data.event;
    delete payload.data;
    console.log(this._super(...arguments));

    return this._super(...arguments);
  },
  keyForAttribute(key) {
    decamelize(key);
  },
  normalize(modelClass, resourceHash) {
    const data = {
      id: resourceHash.id,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    return { data }
  }
});
