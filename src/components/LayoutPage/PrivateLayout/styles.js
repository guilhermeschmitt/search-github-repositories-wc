import { Layout } from 'antd';
import styled from 'styled-components';

export const ContainerLayout = styled(Layout)`
  min-height: 100vh;
  background-color: var(--primary);
`;

export const LayoutContent = styled(Layout.Content)`
    margin: 0;
    height: 100%;
    padding: 24px;
`;
