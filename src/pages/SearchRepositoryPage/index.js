import React, { useCallback, useRef } from 'react';

import { Routes } from '../../routes/Routes';
import { Container, Text, SearchIcon, SearchAction, StyledInput, Button } from './styles';

function SearchRepositoryPage(props) {

  const searchInput = useRef(null);

  const search = useCallback(() => {
    const { value } = searchInput.current.state;

    if (!value || value.trim() === '')
      alert('Digite alguma coisa no campo de busca!');
    else
      props.history.push(`${Routes.repositoriesList.path}?q=${value}`);
  }, []);

  return (
    <Container>
      <Text>
        <SearchIcon /> Enter the name of the repository you want to search below
      </Text>
      <SearchAction>
        <StyledInput
          ref={searchInput}
          placeholder='ex. react'
        />
        <Button onClick={search}>
          Buscar
        </Button>
      </SearchAction>
    </Container>
  );
}

export default SearchRepositoryPage;
