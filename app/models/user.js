import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr(),
  bookings: DS.hasMany('booking', { async: true }),
  events: DS.hasMany('event', { async: false }),
  // centers: DS.hasMany('center', { async: true }),
});
