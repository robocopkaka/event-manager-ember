import {helper} from '@ember/component/helper';

export function pluralizeWord(params/*, hash*/) {
  return params[0] === 1 ? 'attendee' : 'attendees';
}

export default helper(pluralizeWord);
