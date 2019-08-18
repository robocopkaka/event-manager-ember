import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.belongsTo('event', { async: false }),
  user: DS.belongsTo('user', { async: true }),
  userId: DS.attr(),
  eventId: DS.attr(),
});
