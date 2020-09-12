import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.div`
  widht: 100%;
  margin: 40px;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 1.5;
  word-wrap: break-word;

  > b {
    font-weight: 600;
  }
`;

export const SearchIcon = styled(FaSearch)`
  margin-right: 5px;
  vertical-align: text-bottom;
`;
export const SearchAction = styled.div``;
