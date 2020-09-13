import qs from 'query-string';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import useCommon from '../../hooks/Common';
import RepositoryList from '../../components/Repository/RepositoryList';

function RepositoriesListPage(props) {

  const { isFavorite } = useCommon();
  const [repoList, setRepoList] = useState({
    total: 0,
    items: [],
  });

  //FIXME: Colocar caminho do backend e lançar exceções, colocar um loading também

  useEffect(() => {
    const { q } = qs.parse(props.location.search);
    fetch(`https://api.github.com/search/repositories?q=${q}&page=1&per_page=10`)
      .then(async response => {
        if (response.status === 200) {
          const { total_count, items } = await response.json();
          setRepoList({
            total: total_count,
            items: items.map(el => ({ ...el, favorite: isFavorite(el) }))
          });
        } else {
          console.log(response);
        }
      });
  }, [props.location.search, isFavorite]);

  return (
    <Container>
      <div>
        {repoList.total} repository results
      </div>
      <Divider />
      <RepositoryList
        data={repoList.items}
        total={repoList.total}
        onChange={() => alert("TODO:")}
      />
    </Container>
  )
}

export default RepositoriesListPage;
