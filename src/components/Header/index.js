import { message } from 'antd';
import React, { useRef } from 'react';
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

  const seachInputHeader = useRef('');

  function handleSubmit(event) {
    event.preventDefault();
    const { value } = seachInputHeader.current.state;

    if (!value || value.trim() === '')
      message.warning('Digite alguma coisa no campo de busca!');
    else
      history.push(`${Routes.repositoriesList.path}?q=${value}`);
  }

  return (
    <Container>
      <GithubLogo onClick={() => history.push(Routes.searchRepository.path)} />
      <SearchForm onSubmit={handleSubmit}>
        {
          renderSearchHeader &&
          <SearchInput
            ref={seachInputHeader}
            placeholder="Enter Repository name..."
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
