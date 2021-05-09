import { EMPTY_OBJECT } from 'constants/app.constants';

export const logoutHandler = props => {
  const { setAuthInfo, history } = props;

  return setTimeout(() => {
    setAuthInfo({ isAuthenticated: false, userInfo: EMPTY_OBJECT });
    return history.push('/sign-in');
  }, 1000);
};
