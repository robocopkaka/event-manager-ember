import DS from 'ember-data';

export default DS.Model.extend({
  addressLine1: DS.attr('string'),
  addressLine2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  event: DS.belongsTo('event', { async: false })
});
