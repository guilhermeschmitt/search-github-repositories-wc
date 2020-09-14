import React from 'react'
import { withRouter } from 'react-router-dom';

import Header from '../../Header';
import useCommon from '../../../hooks/Common';
import { ContainerLayout, LayoutContent } from './styles';

function PrivateLayout(props) {
  const { handleThemeName, loading } = useCommon();

  if(loading)
  return <div>CARREGANDO...</div>

  return (
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
  )
}

export default withRouter(PrivateLayout);
