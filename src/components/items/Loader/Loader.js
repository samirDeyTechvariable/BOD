import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/bits/Spinner';

import styles from './loader.module.css';

const Loader = ({ color, className, text, children, loading }) => {
  if (loading) {
    return (
      <div className={className}>
        <Spinner color={color} />
        <div className={styles.text}>{text}</div>
      </div>
    );
  }
  return children;
};

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Loader.defaultProps = {
  loading: true,
  color: 'primary',
  className: styles.container,
  text: 'Loading...',
  children: null,
};

export default Loader;
