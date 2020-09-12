import styled from 'styled-components';

export const InputStyle = styled.input`
  outline: none;
  font-size: 14px;
  padding: 5px 12px;
  line-height: 20px;
  border-radius: 6px;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: right 8px center;

  color: #24292e;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  box-shadow: inset 0 1px 0 rgba(225,228,232,.2);

  :focus {
    border-color: #0366d6;
    outline: none;
    box-shadow: 0 0 0 3px rgba(3,102,214,.3);
  }
`;
