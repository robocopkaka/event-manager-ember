import Component from '@glimmer/component';
import { action } from '@ember/object'

export default class EventTimeComponent extends Component {
  @action
  updateEventDate(event, name, value) {
    console.log(this.startTime)
    this.args.updateDate(value, name)
  }
}