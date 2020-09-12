import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes/Routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { themes } from './styles/themes';
import RepositoryPage from './pages/RepositoryPage';
import SearchRepositoryPage from './pages/SearchRepositoryPage';
import RepositoriesListPage from './pages/RepositoriesListPage';
import FavRepositoriesListPage from './pages/FavRepositoriesListPage';

function App() {

  const [themeName, setThemeName] = useState('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header
          themeName={themeName}
          setThemeName={setThemeName}
        />
        <SearchRepositoryPage />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
