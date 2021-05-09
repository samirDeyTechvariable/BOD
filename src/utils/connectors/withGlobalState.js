import React from 'react';
import { useRecoilState } from 'recoil';

import { EMPTY_OBJECT } from 'constants/app.constants';

const withGlobalState = (
  atom,
  updaterFunctionName,
  getterFunctionName
) => ComposedComponent => {
  const WithGlobalState = props => {
    const [atomState, setAtomState] = useRecoilState(atom);

    const updaterFunc = (stateToUpdate = EMPTY_OBJECT) =>
      setAtomState({ ...atomState, ...stateToUpdate });

    const getterFunction = () => ({ ...atomState });

    // State of the composed component
    const composedState = {
      ...atomState,
      [updaterFunctionName]: updaterFunc,
      ...props,
    };

    if (typeof getterFunctionName === 'string') {
      composedState[getterFunctionName] = getterFunction;
    }

    return <ComposedComponent {...composedState} />;
  };

  return WithGlobalState;
};

export default withGlobalState;
