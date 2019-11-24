import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Button/Button.module.css';
import Loader from '../Loader/Loader';

const Button = React.forwardRef((props, ref) => {
  const buttonStyle = props.type === 'primary' ? styles.primary : styles.secondary;
  return (
    <button
      ref={ref}
      className={[styles.button, buttonStyle].join(' ')}
      style={props.buttonInlineStyle}
      name={props.name}
      onClick={props.onClick}
      disabled={props.loading}
    >
      <div className={styles.loaderDiv}>
        {props.showLoader ? <Loader className={styles.loader} style={props.loaderStyle} color='#ffffff' /> : null}
        <div className={styles.valueDiv}>
          {props.value}
        </div>
      </div>
    </button>
  );
});

Button.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.any,
  error: PropTypes.bool,
  buttonInlineStyle: PropTypes.object,
  showLoader: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'primary',
  error: false,
  buttonInlineStyle: {},
  showLoader: false
};

export default Button;
