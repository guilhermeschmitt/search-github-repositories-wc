import React from 'react'
import { Empty } from 'antd';

import { RepoList, PaginationWrapper } from './styles';
import RepositoryCard from '../RepositoryCard';

function RepositoryList({ total, data, onChange, loading }) {
  if (data.length === 0 && !loading)
    return <Empty />;

  return (
    <RepoList
      dataSource={data}
      itemLayout='horizontal'
      renderItem={item => <RepositoryCard repository={item} />}
      loadMore={
        total &&
        <PaginationWrapper
          total={total}
          defaultCurrent={1}
          onChange={onChange}
        />
      }
    />
  )
}

export default RepositoryList
