import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
    session: service(),

    actions: {
        authenticate() {
            let credentials = this.getProperties('email', 'password'),
                authenticator = 'authenticator:jwt';
            this.get('session').authenticate(authenticator, credentials)
                .catch((reason) => {
                    this.set('errorMessage', reason.error || reason);
                });
        }
    }
});
