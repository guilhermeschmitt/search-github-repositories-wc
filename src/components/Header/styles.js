import styled from 'styled-components';
import { FaGithub, FaRegLightbulb, FaRegStar } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  padding: 11px 16px;
  align-items: center;
  background: var(--header);
  justify-content: space-between;
`;

export const GithubLogo = styled(FaGithub)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  fill: var(--logo);
  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderActions = styled.div`
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
`

export const FavIcon = styled(FaRegStar)`
  fill: var(--logo);
  width: 20px;
  height: 20px;
`;

export const ThemeIcon = styled(FaRegLightbulb)`
  fill: var(--logo);
  width: 20px;
  height: 20px;
`;

