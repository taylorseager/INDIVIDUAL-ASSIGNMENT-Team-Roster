import { getSinglePlayer } from './playerData';
import { getSingleTeam } from './teamData';

const viewPlayerDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSinglePlayer(bookFirebaseKey)
    .then((bookObject) => {
      getSingleTeam(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch((error) => reject(error));
});

export default viewPlayerDetails;
