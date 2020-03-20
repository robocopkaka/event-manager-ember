import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import moment from "moment";

export default class EventFormComponent extends Component {
  @tracked addressSelected = false;
  @tracked centerSelected = false;
  centerId = null;

  @action
  toggleAddressSelected() {
    this.addressSelected = true;
    this.centerSelected = false;
  }

  @action
  toggleCenterSelected() {
    this.centerSelected = true;
    this.addressSelected = false;
  }

  @action
  createEvent() {
    const {
      name, guests, description, addressLine1, addressLine2, city,
      state, country, centerId
    } = this;
    const startTime = this.createDateTime(this.startDate, this.startTime);
    const endTime = this.createDateTime(this.endDate, this.endTime);
    const bookings = [];
    console.log(startTime, endTime)

    let event = {
      name, guests, description, bookings, centerId, startTime, endTime
    };
    const address = {
      addressLine1, addressLine2, city, state, country,
    };

    this.sendAction("submit", event, address)
  }

  @action
  selectCenter(val) {
    this.set('centerId', val);
  }

  @action
  clearFieldErrors(errors, event) {
    if (errors && errors.length > 0) {
      this.errors[`${event.target.name}Errors`] = undefined;
    }
  }

  @action
  updateDate(value, name) {
    this[`${name}`] = value
    // console.log(this.startTime)
  }

  createDateTime(date, time) {
    const setDate = moment(date).format('YYYY-MM-DD');
    return  moment(
      `${setDate.toString()} ${time.toString()}`, 'YYYY-MM-DDLT'
    ).format('YYYY-MM-DD HH:mm:ss')
  }
}
