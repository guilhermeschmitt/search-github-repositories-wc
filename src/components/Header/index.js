import React from 'react';

import { Container, GithubLogo, FavIcon, ThemeIcon, HeaderActions, TextButton } from './styles';

function Header({ setThemeName, themeName }) {

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <GithubLogo/>
      <HeaderActions>
        <TextButton>
          <FavIcon /> Favorites
        </TextButton>
        <ThemeIcon onClick={toggleTheme} />
      </HeaderActions>
    </Container>
  )
}

export default Header;
