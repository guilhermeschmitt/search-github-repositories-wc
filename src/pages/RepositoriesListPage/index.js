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
    loading: true,
  });

  useEffect(() => {
    async function searchRepositories() {
      try {
        const { total_count, items } = await RepositoryService.searchRepositories(q, 1, 10);

        setRepoList({
          loading: false,
          total: total_count,
          items: items.map(el => ({ ...el, favorite: isFavorite(el) })),
        });
      } catch (error) {
        alert(error);
        setRepoList(prevState => ({ ...prevState, loading: false }));
      }
    }

    const { q } = qs.parse(props.location.search);
    searchRepositories(q);

  }, [props.location.search]);

  const onChangePage = useCallback(async (page, pageSize) => {
    try {
      const { q } = qs.parse(props.location.search);
      setRepoList(prevState => ({ ...prevState, loading: true }));
      const { total_count, items } = await RepositoryService.searchRepositories(q, page, pageSize);

      setRepoList({
        loading: false,
        total: total_count,
        items: items.map(el => ({ ...el, favorite: isFavorite(el) }))
      });
    } catch (error) {
      alert(error);
      setRepoList(prevState => ({ ...prevState, loading: false }));
    }
  }, []);

  return (
    <Container>
      <div>
        {
          repoList.loading
            ? 'Carregando...'
            : `${repoList.total} repository results`
        }
      </div>
      <Divider />
      <RepositoryList
        total={repoList.total}
        onChange={onChangePage}
        loading={repoList.loading}
        data={
          repoList.loading
            ? [...new Array(10)].map(() => ({ loading: true }))
            : repoList.items
        }
      />
    </Container>
  )
}



export default RepositoriesListPage;
