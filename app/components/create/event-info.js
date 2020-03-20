import Component from '@glimmer/component';
import { observer, set, action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class EventInfoComponent extends Component {
  @tracked errors;
  @tracked nameClasses = 'input';
  @tracked guestsClasses = 'input';
  @tracked descriptionClasses = 'textarea';

  @action
  clearErrors(errors, event) {
    // console.log(errors, event.target.value, event.target.name)
    // closure action. Call the action that was passed in  event-form.hbs to event-info.hbs using
    // it's assigned name
    this.args.clearFieldErrors(errors, event);
  }

  // @action
  // updateValue(event) {
  //   // console.log(this.name)
  //   // console.log(event.target.name, event.target.value)
  //   // console.log("this");
  //   // this.clearErrors()
  //   // console.log(this.args.updateValue());
  //   this.args.updateValue(event)
  // }

  get nameClasses() {
    console.log(this.errors.nameErrors && this.errors.nameErrors.length > 0)
    return this.errors.nameErrors && this.errors.nameErrors.length > 0 ? 'input is-danger' : 'input';
  }

  get guestsClasses() {
    return this.errors.guestsErrors && this.errors.guestsErrors.length > 0 ? 'input is-danger' : 'input';
  }

  get descriptionClasses() {
    return this.errors.descriptionErrors && this.errors.descriptionErrors.length > 0 ? 'textarea is-danger' : 'textarea';
  }

  // guestsDidChange = observer('errors.guestsErrors', function() {
  //   const result = this.errors.guestsErrors && this.errors.guestsErrors.length > 0  ? 'input is-danger' : 'input';
  //   set(this, 'guestsClasses', result);
  // })
  // descriptionDidChange = observer('errors.descriptionErrors', function() {
  //   const result = this.errors.descriptionErrors && this.errors.descriptionErrors.length > 0  ? 'textarea is-danger' : 'textarea';
  //   set(this, 'descriptionClasses', result);
  // })
}
