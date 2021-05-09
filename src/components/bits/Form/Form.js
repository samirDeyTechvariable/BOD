import React from 'react';
import PropTypes from 'prop-types';

import { _noop } from 'utils/common';

const Form = ({ children, onSubmit, ...restProps }) => (
  <div>
    <form onSubmit={onSubmit} {...restProps}>
      {children}
    </form>
  </div>
);

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: _noop,
};

export default Form;
