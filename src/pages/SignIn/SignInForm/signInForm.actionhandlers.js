import AuthService from 'services/AuthService';
import { EMPTY_STRING } from 'constants/app.constants';

export const loginHandler = async props => {
  const { username, password, setState, setAuthInfo, history } = props;
  try {
    setState({ submitting: true });
    const data = { username, password };
    await AuthService.login(data);

    const userInfo = {
      username,
    };
    setAuthInfo({ isAuthenticated: true, userInfo });
    return history.push('/my-profile');
  } catch (error) {
    return setState({
      submitting: false,
      username: EMPTY_STRING,
      password: EMPTY_STRING,
    });
  }
};
