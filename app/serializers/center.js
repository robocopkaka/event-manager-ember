import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeFindAllResponse(store, primaryModel, payload, id) {
    delete payload.message;
    payload.centers = payload.data.centers;
    delete payload.data;

    return this._super(...arguments);
  },

  normalizeFindRecordResponse(store, primaryModel, payload, id) {
    delete payload.message;
    payload.center = payload.data.center;
    delete payload.data;

    return this._super(...arguments);
  }
});
