import { clientCredentials } from '../utils/client';
// API CALLS FOR BOOKS

const endpoint = clientCredentials.databaseURL;

const getPlayers = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/players.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// DELETE BOOK
const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/players/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// TODO: GET SINGLE BOOK
const getSinglePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/players/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE BOOK
const createPlayer = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/players.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE BOOK
const updatePlayer = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/players/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// const getBooksByAuthor = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/books.json?orderBy="author_id"&equalTo="${firebaseKey}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(Object.values(data)))
//     .catch(reject);
// });

export {
  getPlayers,
  createPlayer,
  deletePlayer,
  getSinglePlayer,
  updatePlayer,
};
