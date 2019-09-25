import Component from '@ember/component';
import moment from "moment";

export default Component.extend({
  addressSelected: false,
  centerSelected: false,
  actions: {
    toggleAddressSelected() {
      this.set('addressSelected', true);
      this.set('centerSelected', false);
    },
    toggleCenterSelected() {
      this.set('centerSelected', true);
      this.set('addressSelected', false);
    },
    createEvent() {
      const name = this.get('name');
      const guests = this.get('guests');
      const description = this.get('description');
      const startTime = this.createDateTime(this.get('startDate'), this.get('startTime'));
      const endTime = this.createDateTime(this.get('endDate'), this.get('endTime'));
      const addressLine1 = this.get('addressLine1');
      const addressLine2 = this.get('addressLine2');
      const city = this.get('city');
      const state = this.get('state');
      const country = this.get('country');
      const bookings = [];

      let event = {
        name, guests, description, startTime, endTime, bookings
      };
      const address = {
        addressLine1, addressLine2, city, state, country,
      };

      this.sendAction("submit", event, address)
    }
  },
  createDateTime(date, time) {
    const setDate = moment(date).format('YYYY-MM-DD');
    return  moment(
      `${setDate.toString()} ${time.toString()}`, 'YYYY-MM-DDLT'
    ).format('YYYY-MM-DDTHH:mm:ss')
  }
});
