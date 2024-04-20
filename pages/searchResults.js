import { Button } from 'react-bootstrap';
import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useAuth } from '../utils/context/authContext';
// import { getPlayers } from '../api/playerData';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';

export default function SearchResults({ players }) {
  return (
    <div className="text-center my-4">
      <Link href="/players/newPlayer" passHref>
        <Button>Add A playyaa</Button>
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

SearchResults.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      firebaseKey: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
      uid: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
