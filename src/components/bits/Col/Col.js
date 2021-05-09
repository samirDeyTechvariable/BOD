import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Col = ({ children, item, ...restProps }) => (
  <Grid item {...restProps}>
    {children}
  </Grid>
);

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  item: PropTypes.bool,
};

Col.defaultProps = {
  item: true,
};

export default Col;
