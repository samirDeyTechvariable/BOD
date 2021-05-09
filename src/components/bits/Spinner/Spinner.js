import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Spinner = ({ color }) => <CircularProgress color={color} />;

Spinner.propTypes = {
  color: PropTypes.string,
};

Spinner.defaultProps = {
  color: 'primary',
};

export default Spinner;
