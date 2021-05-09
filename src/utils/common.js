/* eslint-disable no-bitwise */
// Common Utilities
export const _noop = () => {};
export const _identity = item => item;

export const _debounce = (funcToExec, millisToDebounce) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      funcToExec(...args);
    }, millisToDebounce);
  };
};

// Type Checking
export const _isString = item => typeof item === 'string';
export const _isArray = variable => variable instanceof Array;

// env variables
/**
 * Returns the ENV variable from .env file.
 *
 * @param {string} key Name of the ENV variable
 * @returns {string} The value of the env variable with the key.
 */
export const getEnv = key => process.env[`REACT_APP_${key}`];


