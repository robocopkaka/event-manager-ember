import Base from 'ember-simple-auth/authenticators/base';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import ajax from "ember-ajax/utils/ajax";
import { run } from '@ember/runloop';

export default Base.extend({
  store: service(),
  restore(data) {
    return new Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    })
  },

  authenticate(creds) {
    const host = this.get('store').adapterFor('application').get('host')
    const namespace = this.get('store').adapterFor('application').get('namespace')

    const { email, password } = creds;
    const data = JSON.stringify({
      auth: {
        email,
        password
      }
    });

    const requestOptions = {
      url: `${host}/${namespace}/login`,
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };

    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        const { jwt } = response;

        run(() =>{
          resolve({ token: jwt })
        })
      },(error) => {
        run(() =>{
          reject(error)
        })
      })
    })
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
