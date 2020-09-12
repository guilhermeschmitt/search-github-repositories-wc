import { Layout, Spin } from 'antd';
import styled from 'styled-components';

export const SpinWrapper = styled(Spin)`
  .ant-spin-nested-loading {
    min-height: 100%;
    .ant-spin-container {
      min-height: 100%;
    }
  }
`;

export const ContainerLayout = styled(Layout)`
  min-height: 100vh;
  background-color: var(--primary);
`;

export const LayoutContent = styled(Layout.Content)`
    margin: 0;
    height: 100%;
    padding: 24px;
`;
