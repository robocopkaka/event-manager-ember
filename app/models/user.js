import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  bookings: DS.hasMany('booking', { async: true }),
  events: DS.hasMany('event', { async: false })
});
