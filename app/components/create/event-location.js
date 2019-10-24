import Component from '@ember/component';

export default Component.extend({
  actions: {
    selectCenter(val) {
      // call selectCenter method in parent component and pass val using a closure
      this.get('selectCenter')(val)
    }
  }
})