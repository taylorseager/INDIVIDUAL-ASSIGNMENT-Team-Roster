/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getPlayers } from '../api/playerData';

export default function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const { user } = useAuth();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const allPlayers = await getPlayers(user.uid);
    const filteredPlayers = Object.values(allPlayers).filter((player) => player.full_name.toLowerCase().includes(searchValue.toLowerCase())
    || player.position.toLowerCase().includes(searchValue.toLowerCase()));
    onSearch(filteredPlayers);
  };

  return (
    <Form onSubmit={handleSubmit} inline>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search Players"
            value={searchValue}
            onChange={handleChange}
            className="mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
}
