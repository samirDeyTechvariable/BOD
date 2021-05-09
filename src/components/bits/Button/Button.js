import React from 'react';
import PropTypes from 'prop-types';
import { Button as MaterialUIBtn } from '@material-ui/core';

import { _noop } from 'utils/common';

const Button = ({ children, type, onClick, variant, color, ...restProps }) => (
  <MaterialUIBtn
    type={type}
    onClick={onClick}
    variant={variant}
    color={color}
    {...restProps}
  >
    {children}
  </MaterialUIBtn>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: _noop,
  variant: 'contained',
  color: 'primary',
  type: 'button',
};

export default Button;
