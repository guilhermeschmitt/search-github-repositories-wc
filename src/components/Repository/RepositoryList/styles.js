import { List, Pagination } from 'antd';
import styled from 'styled-components';

export const RepoList = styled(List)`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const PaginationWrapper = styled(Pagination)`
  .ant-pagination-prev, .ant-pagination-next  {
    button {
      background: var(--paginationbg);
      a{
        color: var(--paginationcolor);
      }
    }
  }

  .ant-select-selector, .ant-select-dropdown, .ant-pagination-item {
    background: var(--paginationbg);
    a {
      color: var(--paginationcolor);
    }
  }
`;
