import React from 'react';
import PropTypes from 'prop-types';
import { flowRight } from 'lodash';

import Row from 'components/bits/Row';
import Col from 'components/bits/Col';
import Form from 'components/bits/Form';
import TextField from 'components/bits/TextField';
import Button from 'components/bits/Button';
import withGlobalState from 'utils/connectors/withGlobalState';
import withLocalState from 'utils/connectors/withLocalState';
import authControlAtom from 'recoil-atoms/authControl.atom';
import {
  AUTH_INFO_UPDATER,
  AUTH_INFO_GETTER,
} from 'constants/updaterFunctions.constants';

import styles from './signInForm.module.css';
import { loginHandler } from './signInForm.actionhandlers';
import { LOCAL_STATE_UPDATER, DEFAULT_STATE } from './signInForm.constants';

const SignInForm = props => {
  const { username, password, submitting } = props;

  const handleChange = event => {
    const { setState } = props;
    return setState({ [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    return loginHandler(props);
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <TextField
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Username"
              value={username}
            />
          </Col>
          <Col xs={12}>
            <TextField
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              value={password}
            />
          </Col>
          <Col xs={12}>
            <Button type="submit" disabled={submitting} onClick={handleSubmit}>
              {submitting ? 'Submitting' : 'Submit'}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

SignInForm.propTypes = {
  setState: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default flowRight(
  withLocalState(DEFAULT_STATE, LOCAL_STATE_UPDATER),
  withGlobalState(authControlAtom, AUTH_INFO_UPDATER, AUTH_INFO_GETTER)
)(SignInForm);
