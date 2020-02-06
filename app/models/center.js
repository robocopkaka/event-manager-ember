import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  capacity: DS.attr('number'),
  address: DS.belongsTo('address', { async: false }),
  // user: DS.belongsTo('user', { async: true }),
  events: DS.hasMany('event', { async: true })
});
