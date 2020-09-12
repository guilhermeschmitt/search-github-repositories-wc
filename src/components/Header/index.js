import React, { useState } from 'react';
import { Routes } from '../../routes/Routes';

import {
  Container,
  GithubLogo,
  SearchInput,
  SearchForm,
  HeaderActions,
  TextButton,
  FavIcon,
  ThemeIcon
} from './styles';

function Header({ setThemeName, renderSearchHeader, history }) {

  const [search, setSearch] = useState('');

  function handleSubmit() {
    console.log('TODO: talvez usar ref ao invés de um estado');
  }

  return (
    <Container>
      <GithubLogo onClick={() => history.push(Routes.searchRepository.path)} />
      <SearchForm onSubmit={handleSubmit}>
        {
          renderSearchHeader &&
          <SearchInput
            value={search}
            placeholder="Enter Username or Repo..."
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        }
      </SearchForm>
      <HeaderActions>
        <TextButton onClick={() => history.push(Routes.favRepositoriesList.path)}>
          <FavIcon /> Favorites
        </TextButton>
        <ThemeIcon onClick={setThemeName} />
      </HeaderActions>

    </Container>
  )
}

export default Header;
