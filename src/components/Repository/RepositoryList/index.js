import React from 'react'
import { Empty, Pagination } from 'antd';

function RepositoryList({ total, data, onChange }) {
  if (total === 0)
    return (
      <Empty />
    );

  return (
    <div>
      {
        data.map(el => (
          <div>
            TESTE
          </div>
        ))
      }
      <Pagination
        total={total}
        defaultCurrent={1}
        onChange={onChange}
      />
    </div>
  )
}

export default RepositoryList
