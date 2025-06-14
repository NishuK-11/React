import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ label }) => {
  return <button>{label}</button>;
};

Button.defaultProps = {
  label: 'Click Me'
};

export default Button;

