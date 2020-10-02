import config from '../config';

const catsApiService = {
  getCats() {
    return fetch(`${config.API_ENDPOINT}/pets`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
  deleteCats(){
    return fetch(`${config.API_ENDPOINT}/pets/cat`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then();
  }
};

export default catsApiService;