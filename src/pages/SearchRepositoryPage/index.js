import { message } from 'antd';
import React, { useCallback, useRef } from 'react';

import { Routes } from '../../routes/Routes';
import { Container, Text, SearchIcon, SearchAction, StyledInput, Button } from './styles';

function SearchRepositoryPage(props) {

  const searchInput = useRef(null);

  const search = useCallback((event) => {
    const { value } = searchInput.current.state;

    if (!value || value.trim() === '') {
      event.preventDefault();
      message.warning('Type something in the search field!');
    }
    else {
      props.history.push(`${Routes.repositoriesList.path}?q=${value}`);
    }
  }, []);

  return (
    <Container>
      <Text>
        <SearchIcon /> Enter the name of the repository you want to search below
      </Text>
      <SearchAction onSubmit={search}>
        <StyledInput
          id='searchInput'
          ref={searchInput}
          placeholder='ex. react'
        />
        <Button
          title='Search'
          onClick={search}
          id='searchButton'
        >
          Search
        </Button>
      </SearchAction>
    </Container>
  );
}

export default SearchRepositoryPage;
