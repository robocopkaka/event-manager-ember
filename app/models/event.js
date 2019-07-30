import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  guests: DS.attr(),
  start_time: DS.attr(),
  end_time: DS.attr(),
  description: DS.attr(),
});
