import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ErrorBoundaryWrapper from 'base/ErrorBoundaryWrapper';

const PublicRoute = props => {

  const { component, exact, path } = props;

  return (
    <ErrorBoundaryWrapper>
      <Route exact={exact} path={path} component={component} />
    </ErrorBoundaryWrapper>
  );

};

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

PublicRoute.defaultProps = {
  exact: true,
};

export default React.memo(PublicRoute);
