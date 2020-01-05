import { helper } from '@ember/component/helper';
import { capitalize } from '@ember/string';

export function capitalizeWord(params/*, hash*/) {
  return capitalize(params[0]);
}

export default helper(capitalizeWord);
