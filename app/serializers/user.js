import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    delete  payload.message;
    payload.user = payload.data.user;
    delete payload.data;

    return this._super(...arguments);
  }
});
