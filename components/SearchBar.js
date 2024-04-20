import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import searchPlayers from '../api/mergedData';

export default function SearchBar({ setSearchResults }) {
  const [input, setInput] = useState('');
  // use router to get query
  const router = useRouter();

  const search = (value) => {
    searchPlayers(value).then(({ searchResults }) => {
      setSearchResults(searchResults);
    });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    search(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/searchResult');
    search(input);
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search Players"
          value={input}
          onChange={handleChange}
        />
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>
    </>
  );
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.shape({
    full_name: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
};
