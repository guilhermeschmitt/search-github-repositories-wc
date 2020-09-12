import React from 'react'
import { Route } from 'react-router-dom'
import PrivateLayout from '../components/LayoutPage/PrivateLayout';

function PrivateRoute(props) {
  return (
    <PrivateLayout renderSearchHeader={props.renderSearchHeader}>
      <Route {...props} />
    </PrivateLayout>
  )
}

PrivateRoute.defaultProps = {
  renderSearchHeader: true,
};

export default PrivateRoute
