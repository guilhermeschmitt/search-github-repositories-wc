import qs from 'query-string';
import { Divider } from 'antd';
import React, { useEffect, useState, useCallback } from 'react';

import { Container } from './styles';
import useCommon from '../../hooks/Common';
import RepositoryList from '../../components/Repository/RepositoryList';
import RepositoryService from '../../services/RepositoryService';

function RepositoriesListPage(props) {

  const { isFavorite } = useCommon();
  const [repoList, setRepoList] = useState({
    total: 0,
    items: [],
  });

  //FIXME: Colocar caminho do backend e lançar exceções, colocar um loading também

  useEffect(() => {
    async function searchRepositories() {
      try {
        const { total_count, items } = await RepositoryService.searchRepositories(q, 1, 10);

        setRepoList({
          total: total_count,
          items: items.map(el => ({ ...el, favorite: isFavorite(el) }))
        });
      } catch (error) {
        alert(error);
      }
    }

    const { q } = qs.parse(props.location.search);
    searchRepositories(q);

  }, []);

  const onChangePage = useCallback(async (page, pageSize) => {
    try {
      const { q } = qs.parse(props.location.search);
      const { total_count, items } = await RepositoryService.searchRepositories(q, page, pageSize);

      setRepoList({
        total: total_count,
        items: items.map(el => ({ ...el, favorite: isFavorite(el) }))
      });
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <Container>
      <div>
        {repoList.total} repository results
      </div>
      <Divider />
      <RepositoryList
        data={repoList.items}
        total={repoList.total}
        onChange={onChangePage}
      />
    </Container>
  )
}

export default RepositoriesListPage;
