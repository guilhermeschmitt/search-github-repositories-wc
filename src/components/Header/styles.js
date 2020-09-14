import styled from 'styled-components';
import { GithubOutlined, HeartOutlined, BulbOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(GithubOutlined)`
  svg {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;
    fill: var(--logo);
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SearchForm = styled.form`
  margin-left: 16px;
  width: 100%;
`;

export const SearchInput = styled(Input)`
    outline: 0;
    border: none;
    width: 318px;
    padding: 7px 12px;
    color: var(--logo);
    border-radius: 6px;
    background: var(--input);
    transition: width 0.2s ease-out, color 0.2s ease-out;
`;

export const HeaderActions = styled.span`
  display: flex;
  padding: 0 15px;

  > * {
    flex-shrink: 0;
    cursor: pointer;
    margin-right: 30px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const TextButton = styled.span`
  display: flex;
  color: var(--logo);
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

export const FavIcon = styled(HeartOutlined)`
  svg {
    width: 20px;
    height: 20px;
    fill: var(--logo);
  }
`
export const ThemeIcon = styled(BulbOutlined)`
  svg {
    width: 20px;
    height: 20px;
    fill: var(--logo);
  }
`;
