/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getPlayers } from '../api/playerData';
// import viewPlayerDetails from '../../api/mergedData';

export default function ViewPlayer() {
  const [playerDetails, setPlayerDetails] = useState({});
  // use router to get query
  const router = useRouter();

  // grab firebaseKey from url
  const { firebaseKey } = router.query;

  // make call to API layer to get the data
  useEffect(() => {
    getPlayers(firebaseKey).then(setPlayerDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={playerDetails.image} alt={playerDetails.full_name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {playerDetails.full_name}
          {playerDetails.position}
          {playerDetails.team}
        </h5>
        <hr />
      </div>
    </div>
  );
}
