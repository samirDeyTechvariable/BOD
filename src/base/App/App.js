import React from 'react';
import { RecoilRoot } from 'recoil';

import Routes from 'base/Routes';

// This Component is supposed to render only once. Donot add any side-effects.
/**
 * Returns the entire react application.
 *
 * @returns {React} React Components
 */
function AppContainer() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}

export default AppContainer;
