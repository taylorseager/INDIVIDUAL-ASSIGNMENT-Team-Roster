/* eslint-disable @next/next/no-img-element */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Link from 'next/link';

function PlayerCard({ playerObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={playerObj.image} alt={playerObj.full_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{playerObj.full_name}</Card.Title>
        <p className="card-text bold">{playerObj.position}</p>
        <p className="card-text bold">{playerObj.team}</p>
        <Link href={`/players/${playerObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/players/edit/${playerObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

PlayerCard.propTypes = {
  playerObj: PropTypes.shape({
    image: PropTypes.string,
    full_name: PropTypes.string,
    team: PropTypes.bool,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default PlayerCard;
