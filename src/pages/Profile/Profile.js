import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/bits/Button';
import withGlobalState from 'utils/connectors/withGlobalState';
import { AUTH_INFO_UPDATER } from 'constants/updaterFunctions.constants';
import authControlAtom from 'recoil-atoms/authControl.atom';

import { logoutHandler } from './profile.actionhandlers';
import styles from './profile.module.css';

const Profile = props => {
  const { history } = props;

  const handleLogout = () => logoutHandler(props);

  return (
    <div className={styles.container}>
      <h1>My profile</h1>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div>
        <Button onClick={() => history.push('/')}>Home</Button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withGlobalState(authControlAtom, AUTH_INFO_UPDATER)(Profile);
