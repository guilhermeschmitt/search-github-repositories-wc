import React from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useCommon from './hooks/Common';
import { Routes } from './routes/Routes';
import { themes } from './styles/themes';
import GlobalStyle from './styles/global';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './routes/PrivateRoute';
import RepositoryPage from './pages/RepositoryPage';
import SearchRepositoryPage from './pages/SearchRepositoryPage';
import RepositoriesListPage from './pages/RepositoriesListPage';
import FavRepositoriesListPage from './pages/FavRepositoriesListPage';

import 'antd/dist/antd.css';

function App() {

  const { themeName } = useCommon();
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <Switch>
        <PrivateRoute
          exact
          renderSearchHeader={false}
          component={SearchRepositoryPage}
          path={Routes.searchRepository.path}
          title={Routes.searchRepository.title}
        />
        <PrivateRoute
          exact
          component={RepositoriesListPage}
          path={Routes.repositoriesList.path}
          title={Routes.repositoriesList.title}
        />
        <PrivateRoute
          exact
          component={FavRepositoriesListPage}
          path={Routes.favRepositoriesList.path}
          title={Routes.favRepositoriesList.title}
        />
        <PrivateRoute
          exact
          component={RepositoryPage}
          path={Routes.repository.path}
          title={Routes.repository.title}
        />
        <PrivateRoute
          title='Error - 404'
          component={NotFoundPage}
        />
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
