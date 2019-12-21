import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerButton.module.css';

const Button = React.forwardRef((props, ref) => {
  return (
    <div className={styles.toggle}>
      <input
        type='checkbox'
        className={styles.hamburgerCheckbox}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <span data-theme={props.theme} />
      <span data-theme={props.theme} />
      <span data-theme={props.theme} />
    </div>
  );
});

Button.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  theme: PropTypes.string
};

Button.defaultProps = {
};

export default Button;
