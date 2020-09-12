import qs from 'query-string';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import RepositoryList from '../../components/Repository/RepositoryList';

function RepositoriesListPage(props) {

  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);

  //FIXME: Colocar caminho do backend e lançar exceções
  useEffect(() => {
    const { q } = qs.parse(props.location.search);
    fetch(`https://api.github.com/search/repositories?q=${q}&page=1&per_page=10`)
      .then(async response => {
        if (response.status === 200) {
          const { total_count, items } = await response.json();
          setData(items);
          setTotal(total_count);
        } else {
          console.log(response);
        }
      });
  }, []);


  //FIXME: Acho que vou mudar isso aqui;

  if (data?.error)
    return <h1>{data.error}</h1>;

  if (total === null)
    return <h1>Loading...</h1>;

  return (
    <Container>
      <div>
        {total} repository results AQUI VAI TER UMA PARADA PRA ORDENAR
      </div>
      <Divider />
      <RepositoryList
        data={data}
        total={total}
        onChange={() => alert("TODO:")}
      />
    </Container>
  )
}

export default RepositoriesListPage;
