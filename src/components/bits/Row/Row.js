import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Row = ({ children, container, ...restProps }) => (
  <Grid container {...restProps}>
    {children}
  </Grid>
);

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  container: PropTypes.bool,
};

Row.defaultProps = {
  container: true,
};

export default Row;
