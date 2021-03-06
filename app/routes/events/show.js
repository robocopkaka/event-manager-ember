import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('event', params.id)
  },

  renderTemplate() {
    this.render('events/show', { into: 'application' })
  }
});
