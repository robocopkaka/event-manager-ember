import Component from '@ember/component';
import { observer, set } from '@ember/object';

export default Component.extend({
  actions: {
    clearErrors(errors, value, e) {
      // closure action. Call the action that was passed in  event-form.hbs to event-info.hbs using
      // it's assigned name
      this.clearAddressErrors(errors, value, e.target.name);
    },
  },
  addressLine1Classes: 'input',
  cityClasses: 'input',
  stateClasses: 'input',
  countryClasses: 'input',

  addressLine1DidChange: observer('errors.addressLine1Errors', function() {
    const result = this.errors.addressLine1Errors && this.errors.addressLine1Errors.length > 0 ? 'input is-danger' : 'input';
    set(this, 'addressLine1Classes', result);
  }),
  cityDidChange: observer('errors.cityErrors', function() {
    const result = this.errors.cityErrors && this.errors.cityErrors.length > 0 ? 'input is-danger' : 'input';
    set(this, 'cityClasses', result);
  }),
  stateDidChange: observer('errors.stateErrors', function() {
    const result = this.errors.stateErrors && this.errors.stateErrors.length > 0 ? 'input is-danger' : 'input';
    set(this, 'stateClasses', result);
  }),
  countryDidChange: observer('errors.countryErrors', function() {
    const result = this.errors.countryErrors && this.errors.countryErrors.length > 0 ? 'input is-danger' : 'input';
    set(this, 'countryClasses', result);
  }),
})