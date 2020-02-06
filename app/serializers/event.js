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
    payload.meta.pagination.links = this.createPageMeta(payload.meta.pagination.links);

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
  createPageMeta(data) {

    let meta = {};

    Object.keys(data).forEach(type => {
      const link = data[type];
      meta[type] = {};
      let a = document.createElement('a');
      a.href = link;

      a.search.slice(1).split('&').forEach(pairs => {
        const [param, value] = pairs.split('=');

        if (param === 'page') {
          meta[type].page = parseInt(value);
        }
        if (param === 'limit') {
          meta[type].limit = parseInt(value);
        }

      });
      a = null;
    });

    return meta;

  }
});
