import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate() {
    this.render('events/create', { into: 'application' })
  },

  actions: {
    createEvent() {
      const name = this.controller.get('name');
      const guests = this.controller.get('guests');
      const description = this.controller.get('description');
      const date = this.controller.get('date');
      const startTime = this.controller.get('startTime');
      const endTime = this.controller.get('endTime');
      const bookings = []

      let newRecord = this.store.createRecord('event', {
        name, guests, description, date, startTime, endTime, bookings
      });


      newRecord.save()
        .then(() => console.log("Yay! Works"))
        .catch(() => {
          this.currentModel.set('nameErrors', newRecord.get('errors.name'))
          this.currentModel.set('guestsErrors', newRecord.get('errors.guests'))
          this.currentModel.set('descriptionErrors', newRecord.get('errors.description'))
          this.currentModel.set('startTimeErrors', newRecord.get('errors.startTime'))
          this.currentModel.set('endTimeErrors', newRecord.get('errors.endTime'))
        })
    }
  }
});
