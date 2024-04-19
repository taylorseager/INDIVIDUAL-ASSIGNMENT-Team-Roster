import { getPlayers } from './playerData';
// import { getSingleTeam } from './teamData';

const searchPlayers = async (uid, searchValue) => {
  const allPlayers = await getPlayers(uid);
  const filteredPlayers = allPlayers.filter((player) => (
    player.full_name.toLowerCase().includes(searchValue) || player.position.toLowerCase().includes(searchValue)
  ));
  return { filteredPlayers };
};

// const viewPlayerDetails = (playerFirebaseKey) => new Promise((resolve, reject) => {
//   getSinglePlayer(playerFirebaseKey)
//     .then((playerObject) => {
//       // getSingleTeam(teamObject.team)
//       //   .then((teamObject) => {
//       resolve({ playerObject });
//     }).catch((error) => reject(error));
// });

export default { searchPlayers };
