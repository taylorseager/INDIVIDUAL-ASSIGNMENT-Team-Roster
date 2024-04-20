/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { getPlayers } from '../api/playerData';
import SearchBar from '../components/SearchBar';
import { useAuth } from '../utils/context/authContext';
import PlayerCard from '../components/PlayerCard';

function ViewPlayer() {
  const [players, setPlayers] = useState({});
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const { user } = useAuth();
  // use router to get query
  // const router = useRouter();

  // // grab firebaseKey from url
  // const { firebaseKey } = router.query;

  const getAllPlayers = () => {
    getPlayers(user.uid).then((data) => {
      setPlayers(data);
      setFilteredPlayers(data);
    });
  };

  useEffect(() => {
    getAllPlayers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchValue) => {
    const filteredSearch = players.filter((player) => (
      player.full_name.toLowerCase().includes(searchValue.toLowerCase()))
      || player.position.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredPlayers(filteredSearch);
  };

  return (
    <><h1>All Members</h1>
      <h3>Search All Members:</h3>
      <div>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="d-flex flex-wrap">
        {filteredPlayers.map((player) => (
          <PlayerCard playerObj={player} key={player.firebaseKey} onUpdate={getAllPlayers} />
        ))}
      </div>
    </>
  );
}

export default ViewPlayer;
