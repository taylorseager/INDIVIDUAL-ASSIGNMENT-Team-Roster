import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createPlayer, getPlayers, updatePlayer } from '../../api/playerData';

const initialState = {
  full_name: '',
  image: '',
  position: '',
  team: '',
};

function CreatePlayerForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [players, setPlayers] = useState([]);
  console.warn(players);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getPlayers(user.uid).then(setPlayers);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePlayer(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPlayer(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updatePlayer(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Player</h2>

      {/* Name INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Full Name"
          name="full_name"
          value={formInput.full_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Player Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Position INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Position" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Position"
          name="position"
          value={formInput.position}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Team SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Team">
        <Form.Control
          type="text"
          placeholder="Team"
          name="team"
          value={formInput.team}
          onChange={handleChange}
          required
        />
        {/* <Form.Select
          aria-label="team"
          name="team"
          onChange={handleChange}
          className="mb-3"
          value={obj.team}
          required
        > */}
        {/* <option value="">Select an Author</option>
          {
            players.map((author) => (
              <option
                key={author.firebaseKey}
                value={author.firebaseKey}
              >
                {author.first_name} {author.last_name}
              </option> */}
        {/* ))
          } */}
        {/* </Form.Select> */}
      </FloatingLabel>

      {/* DESCRIPTION TEXTAREA
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel> */}

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Player</Button>
    </Form>
  );
}

CreatePlayerForm.propTypes = {
  obj: PropTypes.shape({
    full_name: PropTypes.string,
    image: PropTypes.string,
    position: PropTypes.string,
    team: PropTypes.string,
    title: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

CreatePlayerForm.defaultProps = {
  obj: initialState,
};

export default CreatePlayerForm;
