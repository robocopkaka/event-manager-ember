import DS from 'ember-data';
import ApplicationSerializer from './application';

const { EmbeddedRecordsMixin, errorsHashToArray } = DS;


export default ApplicationSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    bookings: { embedded: 'always' },
    user: { embedded: 'always' },
    address: { embedded: 'always' },
    center: { serialize: 'id' }
  },
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(...arguments);
  },
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(...arguments);
  },
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    delete payload.message;
    payload.event = payload.data.event;
    delete payload.data;

    return this._super(...arguments);
  },
  normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType) {
    delete payload.message;
    payload.event = payload.data.event;
    delete payload.data;

    return this._super(...arguments);
  },

  extractErrors(store, typeClass, payload) {
    payload.errors = errorsHashToArray(payload.errors[0]);

    return this._super(...arguments)
  },
});
