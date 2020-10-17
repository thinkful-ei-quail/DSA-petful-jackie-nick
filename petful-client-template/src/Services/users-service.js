import config from '../config';

const usersApiService = { 
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/people`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
  postUsers(data){
    let user ={name:data}
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
  },
  deleteUser() {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : Promise.resolve('')
    );
  }
};

export default usersApiService;