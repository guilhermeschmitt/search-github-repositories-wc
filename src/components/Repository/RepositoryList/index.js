import React from 'react'
import { Empty } from 'antd';

import RepositoryCard from '../RepositoryCard';
import { RepoList, PaginationWrapper } from './styles';

function RepositoryList({ total, data, onChange, loading }) {
  if (data.length === 0 && !loading)
    return <Empty />;

  return (
    <RepoList
      dataSource={data}
      itemLayout='horizontal'
      renderItem={item => (
        <RepositoryCard
          repository={item}
          favorite={item.favorite}
        />
      )}
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
