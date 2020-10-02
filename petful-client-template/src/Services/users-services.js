import config from '../config';

const usersApiService = { 
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
  updateUsers(){
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST'
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  }
};

export default usersApiService;