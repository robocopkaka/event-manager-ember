import DS from 'ember-data';
import ApplicationSerializer from './application';


export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    bookings: { embedded: 'always' },
    user: { embedded: 'always' },
    address: { embedded: 'always' },
  },
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

    return this._super(...arguments);
  },

  extractErrors(store, typeClass, payload, id) {
    console.log(payload)
  }
});
