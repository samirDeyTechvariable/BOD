import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ErrorBoundaryWrapper from 'base/ErrorBoundaryWrapper';

const PrivateRoute = props => {
  const { component, exact, path } = props;

  return (
    <ErrorBoundaryWrapper>
      {/* TODO Put route redirection logic based on requirement, if the user is not logged in */}
      <Route exact={exact} path={path} component={component} />
    </ErrorBoundaryWrapper>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  exact: true,
};

export default React.memo(PrivateRoute);
