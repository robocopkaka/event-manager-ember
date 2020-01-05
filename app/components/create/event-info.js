import Component from '@ember/component';
import { observer, set } from '@ember/object';

export default Component.extend({
  actions: {
    clearErrors(errors, value, e) {
      // closure action. Call the action that was passed in  event-form.hbs to event-info.hbs using
      // it's assigned name
      this.clearFieldErrors(errors, value, e.target.name);
    },
  },
  nameClasses: 'input',
  guestsClasses: 'input',
  descriptionClasses: 'textarea',
  nameDidChange: observer('errors.nameErrors', function() {
    const result = this.errors.nameErrors && this.errors.nameErrors.length > 0 ? 'input is-danger' : 'input';
    set(this, 'nameClasses', result);
  }),
  guestsDidChange: observer('errors.guestsErrors', function() {
    const result = this.errors.guestsErrors && this.errors.guestsErrors.length > 0  ? 'input is-danger' : 'input';
    set(this, 'guestsClasses', result);
  }),
  descriptionDidChange: observer('errors.descriptionErrors', function() {
    const result = this.errors.descriptionErrors && this.errors.descriptionErrors.length > 0  ? 'textarea is-danger' : 'textarea';
    set(this, 'descriptionClasses', result);
  })
});
