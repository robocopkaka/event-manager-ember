import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate() {
    this.render('events/create', { into: 'application' })
  },

  actions: {
    createEvent(event, address) {
      const { name, description, guests, startTime, endTime } = event;
      const { addressLine1, addressLine2, city, state, country } = address;
      console.log(event)
      // console.log(record)
      //
      let newRecord = this.store.createRecord('event', {
        name, description, guests,
        start_time: startTime,
        end_time: endTime,
        address: this.store.createRecord('address', {
          addressLine1, addressLine2, city, state, country
        })
      });
      //
      console.log(newRecord)
      //
      //
      newRecord.save()
        .then(() => console.log("Yay! Works"))
        .catch(() => {
          console.log(newRecord.get('errors'))
          this.currentModel.set('nameErrors', newRecord.get('errors.name'))
          this.currentModel.set('guestsErrors', newRecord.get('errors.guests'))
          this.currentModel.set('descriptionErrors', newRecord.get('errors.description'))
          this.currentModel.set('startTimeErrors', newRecord.get('errors.startTime'))
          this.currentModel.set('endTimeErrors', newRecord.get('errors.endTime'))
        })
    }
  }
});
