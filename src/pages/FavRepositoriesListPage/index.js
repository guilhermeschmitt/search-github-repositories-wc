import React from 'react';
import { Divider } from 'antd';

import { Container, Title } from './styles';
import RepositoryList from '../../components/Repository/RepositoryList';

import useCommon from '../../hooks/Common';

function FavRepositoriesListPage() {

  const { favorites } = useCommon();
  return (
    <Container>
      <Title>
        Favorites
      </Title>
      <Divider />
      <RepositoryList
        total={null}
        data={favorites}
        onChange={() => {}}
      />
    </Container>
  )
}

export default FavRepositoriesListPage;
