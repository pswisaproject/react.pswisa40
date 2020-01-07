import React, { Component } from 'react';
import styles from './EditProfile.module.css';
import FilterSelect from '../../UI/FormElements/FilterSelect/FilterSelect';

class EditProfile extends Component {
  constructor (props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.lasttNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
    this.addressRef = React.createRef();
    this.cityRef = React.createRef();
    this.countryRef = React.createRef();
    this.phoneRef = React.createRef();
  }

  render () {
    return (
      <div className={styles.editProfileContainer}>
        <div className={styles.EditProfileTitle}>Edit your personal information</div>
        <div className={styles.allInputsContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>First Name:</div>
            <input className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Last Name:</div>
            <input className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Email:</div>
            <input className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Password:</div>
            <input className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Confirm Password:</div>
            <input className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Address:</div>
            <input className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>City:</div>
            <input className={styles.input} />
          </div>
          {/* <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Country:</div>
            <FilterSelect className={styles.select} />
          </div> */}
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Phone Number:</div>
            <input className={styles.input} />
          </div>
          <div className={styles.submitButtonDiv}>
            <div className={styles.submitButton}>Submit</div>
          </div>
          <div className={styles.noteDiv}>
            <div className={styles.note}>Only fields that you enter will be modified.</div>
          </div>
        </div>
      </div>
    );
  }

  handleRegistration = () => {}
}

export default EditProfile;
