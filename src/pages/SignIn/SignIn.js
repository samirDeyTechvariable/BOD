import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/bits/Button';

import SignInForm from './SignInForm';
import styles from './signIn.module.css';

const SignIn = React.memo(props => {
  const { history } = props;
  
  return (
    <div className={styles.container}>
      <h1>Sign In Page</h1>
      <SignInForm {...props} />
      <Button onClick={() => history.push('/')}>Home</Button>
    </div>
  );
});

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignIn;
