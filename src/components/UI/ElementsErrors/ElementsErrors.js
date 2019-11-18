import React from 'react';
import PropTypes from 'prop-types';
import styles from './ElementsErrors.module.css';

const ElementsErrors = (props) => {
  const err = props.errors && props.errors.length > 0 && props.errors.map((value, index) => {
    return <li key={index} className={styles.errorItem}>{value ? '* ' + value : []}</li>;
  });
  return (
    props.errors && props.errors.length > 0
      ? (
        <div className={styles.container}>
          <div className={styles.errorDiv}>
            <div className={styles.errorList}>
              {err}
            </div>
          </div>
        </div>
      )
      : null
  );
};

ElementsErrors.propTypes = {
  errors: PropTypes.array
};

export default ElementsErrors;
