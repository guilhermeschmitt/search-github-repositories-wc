import React from 'react'
import { withRouter } from 'react-router-dom';

import Header from '../../Header';
import useCommon from '../../../hooks/Common';
import { SpinWrapper, ContainerLayout, LayoutContent } from './styles';

function PrivateLayout(props) {
  const { loading, handleThemeName } = useCommon();

  return (
    <SpinWrapper
      delay={250}
      size='large'
      spinning={loading}
      tip='Carregando...'
    >
      <ContainerLayout>
        <Header
          history={props.history}
          setThemeName={handleThemeName}
          renderSearchHeader={props.renderSearchHeader}
        />
        <LayoutContent>
          {React.cloneElement(props.children, {})}
        </LayoutContent>
      </ContainerLayout>
    </SpinWrapper>
  )
}

export default withRouter(PrivateLayout);
