import config from '../config';

const dogsApiService = {
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
  deleteDogs(){
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then();
  }
};

export default dogsApiService;