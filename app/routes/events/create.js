import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get, set } from '@ember/object';

export default Route.extend({
  renderTemplate() {
    this.render('events/create', { into: 'application' })
  },

  model() {
    return RSVP.hash({
      centers: this.store.findAll('center'),
      errors: this.set('errors', {})
    })
  },

  actions: {
    createEvent(event, address) {
      const { name, description, guests, centerId, startTime, endTime, bookings } = event;
      const { addressLine1, addressLine2, city, state, country } = address;
      let newRecord = this.store.createRecord('event', {
        name, description, guests, bookings,
        endTime,
        startTime,
        address: this.store.createRecord('address', {
          addressLine1, addressLine2, city, state, country
        })
      });

      centerId === null ? this.saveEventWithAddress(this, newRecord) : this.saveEventWithCenter(this, centerId, newRecord);
    }
  },

  saveEventWithCenter(self, centerId, newRecord) {
    const that = self;
    self.store.findRecord('center', centerId).then((center) => {
      newRecord.set('center', center);
      newRecord.save()
        .then(() => {
          that.transitionTo('events')
        })
        .catch(() => {
          set(this.currentModel.errors, 'nameErrors', get(newRecord,'errors').errorsFor('name'));
          set(this.currentModel.errors, 'guestsErrors', get(newRecord,'errors').errorsFor('guests'));
          set(this.currentModel.errors, 'descriptionErrors', get(newRecord,'errors').errorsFor('description'));
          set(this.currentModel.errors, 'startTimeErrors', get(newRecord,'errors').errorsFor('startTime'));
          set(this.currentModel.errors, 'endTimeErrors', get(newRecord,'errors').errorsFor('endTime'));
        })
    });
  },
  saveEventWithAddress(self, newRecord) {
    const that = self;
    newRecord.save()
      .then(() => {
        that.transitionTo('events')
      })
      .catch(() => {
        set(this.currentModel.errors, 'nameErrors', get(newRecord,'errors').errorsFor('name'));
        set(this.currentModel.errors, 'guestsErrors', get(newRecord,'errors').errorsFor('guests'));
        set(this.currentModel.errors, 'descriptionErrors', get(newRecord,'errors').errorsFor('description'));
        set(this.currentModel.errors, 'startTimeErrors', get(newRecord,'errors').errorsFor('startTime'));
        set(this.currentModel.errors, 'endTimeErrors', get(newRecord,'errors').errorsFor('endTime'));
        set(this.currentModel.errors, 'addressLine1Errors', get(newRecord,'errors').errorsFor('address.address_line1'));
        set(this.currentModel.errors, 'cityErrors', get(newRecord,'errors').errorsFor('address.city'));
        set(this.currentModel.errors, 'stateErrors', get(newRecord,'errors').errorsFor('address.state'));
        set(this.currentModel.errors, 'countryErrors', get(newRecord,'errors').errorsFor('address.country'));
      })
  }
});
