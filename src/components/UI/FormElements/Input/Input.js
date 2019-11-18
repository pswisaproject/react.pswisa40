import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label';
import styles from './Input.module.css';
// import ElemenentsErrors from '../../ElementsErrors/ElementsErrors';

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <div className={styles.inputDiv}>
        <input
          ref={ref}
          className={styles.inputField}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          style={props.style}
        />
        {props.label &&
          <Label
            className={styles.inputLabel}
            htmlFor={props.htmlid}
            label={props.label}
            required={props.required}
          />}
        {props.children}
      </div>
      <div>
        {/* {props.errors && <ElemenentsErrors errors={props.errors} />} */}
      </div>
    </>
  );
});

Input.defaultProps = {
  type: 'text',
  required: false,
  errors: []
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.any,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  children: PropTypes.node,
  style: PropTypes.object
};

export default Input;
