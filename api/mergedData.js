import { getSinglePlayer } from './playerData';
// import { getSingleTeam } from './teamData';

const viewPlayerDetails = (playerFirebaseKey) => new Promise((resolve, reject) => {
  getSinglePlayer(playerFirebaseKey)
    .then((playerObject) => {
      // getSingleTeam(teamObject.team)
      //   .then((teamObject) => {
      resolve({ playerObject });
    }).catch((error) => reject(error));
});

export default viewPlayerDetails;
