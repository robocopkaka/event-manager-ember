import Controller from '@ember/controller';

export default Controller.extend({
  name:  '',
  centerSelected: false,
  addressSelected: false,

  actions: {
    toggleAddressSelected() {
      this.set('addressSelected', true);
      this.set('centerSelected', false);
    },
    toggleCenterSelected() {
      this.set('centerSelected', true);
      this.set('addressSelected', false);
    }
  }
});
