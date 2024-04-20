import { Button } from 'react-bootstrap';
import Link from 'next/link';
// import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
// import { getPlayers } from '../api/playerData';
// import PlayerCard from '../components/PlayerCard';

function Home() {
  // const [players, setPlayers] = useState([]);

  const { user } = useAuth();

  // const getAllPlayers = () => {
  //   getPlayers(user.uid).then(setPlayers);
  // };

  // useEffect(() => {
  //   getAllPlayers();
  // });

  return (
    <div className="text-center my-4">
      <h1>Welcome {user.displayName.toUpperCase()}!</h1>
      <Link href="/players/newPlayer" passHref>
        <Button>Add A Player</Button>
      </Link>
    </div>
  );
}

export default Home;

// <div className="d-flex flex-wrap">
//   {/* map over players here using PlayerCard component */}
//   {players.map((player) => ( // onUpdate add
//     <PlayerCard key={players.firebaseKey} playerObj={player} onUpdate={getAllPlayers} />
//   ))}
// </div>
