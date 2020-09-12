import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Title, SearchIcon, SearchAction } from './styles';

function SearchRepositoryPage() {
  return (
    <Container>
      <Title>
        <SearchIcon />
            Search more than <b>186M</b> repositories
        </Title>
      <SearchAction>
        <Input />
        <Button />
      </SearchAction>
    </Container>
  )
}

export default SearchRepositoryPage;
