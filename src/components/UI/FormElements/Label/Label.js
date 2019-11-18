import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.label} {props.required && <span className={styles.asteriks}> *</span>}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool
};

export default Label;
