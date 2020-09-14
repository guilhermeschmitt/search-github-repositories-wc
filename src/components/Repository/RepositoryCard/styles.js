import { Skeleton } from 'antd';
import styled from 'styled-components';
import { BookOutlined, HeartFilled, StarOutlined } from '@ant-design/icons';

export const Container = styled.div`
  margin: 1rem 0;
  padding: 1em 1em;
  border-radius: 6px;
  position: relative;
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px 0 var(--border);

  > svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    fill: var(--icon);
  }

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RepositoryIcon = styled(BookOutlined)``;

export const FavoriteContainer = styled.div`
  &:hover {
    opacity: .8;
    cursor: pointer;
  }

  &.favorite {
    span {
      color: var(--red);
    } svg {
      fill: var(--red);
    }
  }
`;

export const FavoriteIcon = styled(HeartFilled)`
  margin-right: 5px;
`;

export const TextLink = styled.a`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--link);
  text-decoration: none;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  margin: 8px 0 16px;
  font-size: 12px;
  color: var(--gray);
  letter-spacing: 0.1px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentInfo = styled.div`
  display: flex;
  margin-right: 16px;
  align-items: center;

  > span {
    margin-left: 5px;
    font-size: 12px;
    color: var(--gray);
  }
`;

export const StarIcon = styled(StarOutlined)``;

export const Language = styled.div`
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--other-language);

    &.javascript {
      background: var(--javascript);
    }
    &.typescript {
      background: var(--typescript);
    }
`;

export const SkeletonWrapper = styled(Skeleton)`
    margin-bottom: 30px;

    .ant-skeleton-content {
      min-width: 500px;
      max-width: 800px;
    }
`;
