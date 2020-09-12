import { Input } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

export const Container = styled.div`
  margin: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 24px;
  line-height: 1.5;
  word-wrap: break-word;
`

export const SearchIcon = styled(SearchOutlined)`
  margin-right: 5px;
`;

export const SearchAction = styled.div`
  display: flex;
  padding-top: 15px;
  align-items: center;
`;

export const StyledInput = styled(Input)`
  width: 318px;
  padding: 7px 12px;
  margin-right: 15px;
  border-radius: 6px;
  transition: width 0.2s ease-out, color 0.2s ease-out;
`;
