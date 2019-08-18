import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  guests: DS.attr(),
  startTime: DS.attr(),
  endTime: DS.attr(),
  description: DS.attr(),
  bookings: DS.hasMany('booking', { async: false }),
  user: DS.belongsTo('user', { async: false })
});
