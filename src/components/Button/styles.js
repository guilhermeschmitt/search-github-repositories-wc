import styled from 'styled-components';

export const ButtonStyle = styled.button`
  color: #24292e;
  background-color: #fafbfc;
  border-color: rgba(27,31,35,.15);
  transition: background-color .2s cubic-bezier(.3,0,.5,1);
  box-shadow: 0 1px 0 rgba(27,31,35,.04),inset 0 1px 0 hsla(0,0%,100%,.25);

  position: relative;
  display: inline-block;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid;
  border-radius: 6px;
  appearance: none;

  :hover {
    background-color: #f3f4f6;
    transition-duration: .1s;
  }
`;
