import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  renderTemplate() {
    this.render('events/create', { into: 'application' })
  },

  model() {
    return RSVP.hash({
      centers: this.store.findAll('center')
    })
  },

  setupController(controller, models) {
    controller.set('centers', models.centers)
  },

  actions: {
    createEvent(event, address) {
      const { name, description, guests, centerId, startTime, endTime } = event;
      const { addressLine1, addressLine2, city, state, country } = address;
      let newRecord = this.store.createRecord('event', {
        name, description, guests,
        endTime,
        startTime,
        address: this.store.createRecord('address', {
          addressLine1, addressLine2, city, state, country
        })
      });
      const self = this;
      this.store.findRecord('center', centerId).then((center) => {
        newRecord.set('center', center);
        newRecord.save()
          .then(() => {
            self.transitionTo('events')
          })
          .catch(() => {
            this.currentModel.set('nameErrors', newRecord.get('errors.name'))
            this.currentModel.set('guestsErrors', newRecord.get('errors.guests'))
            this.currentModel.set('descriptionErrors', newRecord.get('errors.description'))
            this.currentModel.set('startTimeErrors', newRecord.get('errors.startTime'))
            this.currentModel.set('endTimeErrors', newRecord.get('errors.endTime'))
          })
      });
    }
  }
});
