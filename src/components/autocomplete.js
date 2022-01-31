import React, { useState, useEffect, useCallback } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import SuggestionsList from './suggestions-list';
import debounce from 'lodash.debounce';
import { Search } from '@material-ui/icons';
import { Link } from '@reach/router';
import styled from '@emotion/styled';
import { colors } from '../styles';

export const GET_BREED = gql`
  query getAutoCompleteBreed($breedName: String!) {
    getBreedsByName(breedName: $breedName) {
      id
      name
    }
  }
`;

/**
 * Autocomplete
 */
const Autocomplete = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [getCatBreeds, { loading, data }] = useLazyQuery(GET_BREED);

  const debouncedApiCall = useCallback(
    debounce((text) => {
      getCatBreeds({
        variables: { breedName: text }
      });
    }, 500),
    []
  );

  useEffect(() => {
    debouncedApiCall(input);
  }, [input, debouncedApiCall]);

  useEffect(() => {
    if (data && !loading) {
      setShowSuggestions(true);
      setSuggestions(data?.getBreedsByName);
    }
  }, [data, loading]);

  const keyDownHandler = (e) => {
    // enter key
    if (e.keyCode === 13) {
      setInput(suggestions[activeSuggestionIndex]?.name);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    }
    // up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === suggestions.length) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Input
          type="text"
          placeholder="Enter your breed"
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={keyDownHandler}
          value={input}
          aria-label="Search by Breed Name"
          aria-describedby="search"
        />
        <InputSearch id="search">
          <Link to={input ? `/breed/${input}` : ''}>
            <Search
              style={{
                fill: input ? colors.dark : colors.darkGrey,
                cursor: input ? 'pointer' : 'not-allowed'
              }}
            />
          </Link>
        </InputSearch>
      </InputGroup>
      {suggestions.length
        ? showSuggestions && (
            <SuggestionsList
              activeSuggestionIndex={activeSuggestionIndex}
              suggestions={suggestions}
            />
          )
        : showSuggestions && input && <small className="ms-3">Sorry, no cat breeds found</small>}
    </>
  );
};

export default Autocomplete;

/** Header styled components */
const InputGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '50px',
  background: colors.light,
  marginTop: '1rem'
});

const Input = styled.input({
  padding: '1.375rem 1.75rem',
  outline: 'none',
  border: 'none',
  borderRadius: 'inherit'
});

const InputSearch = styled.span({
  padding: '1.375rem 1.75rem'
});
