import React from 'react';
import PropTypes from 'prop-types';

import { _noop } from 'utils/common';

const TextField = ({ onChange, type, ...restProps }) => (
  <input onChange={onChange} type={type} {...restProps} />
);

TextField.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
};

TextField.defaultProps = {
  onChange: _noop,
  type: 'text',
};

export default TextField;
