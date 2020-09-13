import React from 'react'
import { Empty, List, Pagination } from 'antd';
import RepositoryCard from '../RepositoryCard';

function RepositoryList({ total, data, onChange }) {
  if (data.length === 0)
    return <Empty />;

  return (
    <List
      dataSource={data}
      itemLayout='horizontal'
      renderItem={item => (
        <RepositoryCard repository={item} />
      )}
      loadMore={
        <Pagination
          total={total}
          defaultCurrent={1}
          onChange={onChange}
        />
      }
    />
  )
}

export default RepositoryList
