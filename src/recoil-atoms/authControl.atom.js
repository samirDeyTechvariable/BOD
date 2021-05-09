import { createAtom } from 'utils/recoil';

import { EMPTY_OBJECT } from 'constants/app.constants';

const intitState = {
  isAuthenticated: false,
  userInfo: EMPTY_OBJECT,
};

const authControlAtom = createAtom('authControlAtom', intitState);

export default authControlAtom;
