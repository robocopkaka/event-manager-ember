import { helper } from '@ember/component/helper';

export function setClass(params/*, hash*/) {
  const [firstNum, secondNum, mainClass, extraClass]  = params;
  return firstNum === secondNum ? `${mainClass} ${extraClass}` : mainClass;
}

export default helper(setClass);
