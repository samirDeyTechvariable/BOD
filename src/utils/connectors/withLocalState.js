import React, { useState } from 'react';

import { EMPTY_OBJECT } from 'constants/app.constants';

const withLocalState = (
  localState,
  updaterFunctionName
) => ComposedComponent => {
  const WithLocalState = props => {
    const [state, setState] = useState(localState);

    const updaterFunc = (stateToUpdate = EMPTY_OBJECT) =>
      setState({ ...state, ...stateToUpdate });

    // State of the composed component
    const composedState = {
      ...state,
      [updaterFunctionName]: updaterFunc,
      ...props,
    };

    return <ComposedComponent {...composedState} />;
  };

  return WithLocalState;
};

export default withLocalState;
