import { Col } from 'antd';
import styled from 'styled-components';
import { TeamOutlined, StarOutlined, EyeOutlined, WarningOutlined, HeartFilled, ForkOutlined } from '@ant-design/icons';

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    margin-top: 10px;
    > p {
      font-size: 20px;
      font-weight: 300;
      color: var(--username);
    }
`;

export const IconColumn = styled(Col)`
  > span {
    font-size: 14px;
    color: var(--gray);
  }
  > * {
    margin-right: 5px;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    fill: var(--icon);
  }
`;

export const NameColumn = styled(Col)`
  font-size: 18px;
  color: var(--gray);
`;

export const InfoColumn = styled(Col)`
  font-size: 12px;
  color: var(--gray);
`;

export const Descriptioncolumn = styled(Col)`
  margin-top: 15px;
  color: var(--gray);
`;

export const Language = styled.div`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  margin-right: 5px;
  border-radius: 50%;
  background: var(--other-language);

  &.javascript {
    background: var(--javascript);
  }
  &.typescript {
    background: var(--typescript);
  }
`;

export const Title = styled(Col)`
  display: flex;
  font-size: 24px;
  color: var(--gray);
  align-items: center;
  justify-content: center;
`;

export const Name = styled.span`
  font-size: 24px;
  color: var(--gray);
  margin-bottom: 5px;
`;

export const FavIcon = styled(HeartFilled)`
  margin-right: 5px;
`;

export const FavColumn = styled(Col)`
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

export const Container = styled.div``;
export const StarIcon = styled(StarOutlined)``;
export const WatcherIcon = styled(EyeOutlined)``;
export const FollowerIcon = styled(TeamOutlined)``;
export const IssueIcon = styled(WarningOutlined)``;
export const ForkIcon = styled(ForkOutlined)``;
