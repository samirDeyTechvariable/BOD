import { EMPTY_STRING } from 'constants/app.constants';

export const DEFAULT_STATE = {
  username: EMPTY_STRING,
  password: EMPTY_STRING,
  submitting: false,
};

export const LOCAL_STATE_UPDATER = 'setState';
