/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getPlayers } from '../api/playerData';
import PlayerCard from '../components/PlayerCard';

function Home({ playersFromSearch }) {
  const [players, setPlayers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (playersFromSearch.length > 0) {
      setPlayers(playersFromSearch);
    } else {
      getPlayers(user.uid).then((playersData) => {
        setPlayers(playersData);
      });
    }
  }, [playersFromSearch, user.uid]);

  return (
    <div className="text-center my-4">
      <Link href="/players/newPlayer" passHref>
        <Button>Add A Player</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* map over players here using PlayerCard component */}
        {players.map((player) => ( // onUpdate add
          <PlayerCard key={players.firebaseKey} playerObj={player} />
        ))}
      </div>
    </div>
  );
}

export default Home;
