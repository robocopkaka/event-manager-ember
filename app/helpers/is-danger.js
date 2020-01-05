import { helper } from '@ember/component/helper';

export function isDanger(params) {
  return params[0] && params[0].length > 0 ? "is-danger" : "";
}

export default helper(isDanger);
