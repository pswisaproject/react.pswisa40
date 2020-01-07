import React, { Component } from 'react';
import styles from './EditProfile.module.css';
// import FilterSelect from '../../UI/FormElements/FilterSelect/FilterSelect';

class EditProfile extends Component {
  state = {
    errors: []
  }

  constructor (props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
    this.addressRef = React.createRef();
    this.cityRef = React.createRef();
    this.countryRef = React.createRef();
    this.phoneRef = React.createRef();
  }

  render () {
    // const errors = this.state.errors && this.state.errors.map((e, i) => {
    //   return (
    //     <div className={styles.noteDiv}>
    //       <div className={styles.note} key={i}>{e}</div>
    //     </div>
    //   );
    // });

    return (
      <div className={styles.editProfileContainer}>
        <div className={styles.EditProfileTitle}>Edit your personal information</div>
        <div className={styles.allInputsContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>First Name:</div>
            <input className={styles.input} ref={this.firstNameRef} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Last Name:</div>
            <input className={styles.input} ref={this.lastNameRef} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Email:</div>
            <input className={styles.input} ref={this.emailRef} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Password:</div>
            <input className={styles.input} ref={this.passwordRef} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Confirm Password:</div>
            <input className={styles.input} ref={this.confirmPasswordRef} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Address:</div>
            <input className={styles.input} ref={this.addressRef} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>City:</div>
            <input className={styles.input} ref={this.cityRef} />
          </div>
          {/* <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Country:</div>
            <FilterSelect className={styles.select} />
          </div> */}
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Phone Number:</div>
            <input className={styles.input} ref={this.phoneRef} />
          </div>
          <div className={styles.submitButtonDiv}>
            <div className={styles.submitButton} onClick={(e) => this.handleEditProfile(e)}>Submit</div>
          </div>
          <div className={styles.noteDiv}>
            <div className={styles.note}>Only fields that are entered will be modified.</div>
          </div>
          {/* {errors} */}
        </div>
      </div>
    );
  }

  handleEditProfile = (e) => {
    // this.state.errors = []; // empty the array of errors...

    // THESE ERRORS DON'T WORK YET...
    // if (this.passwordRef.current.value !== this.confirmPasswordRef.current.value) {
    //   this.state.errors.push('Passwords must match!');
    //   return;
    // }

    // if (this.firstNameRef.current.value === null &&
    //     this.lastNameRef.current.value === null &&
    //     this.emailRef.current.value === null &&
    //     this.passwordRef.current.value === null &&
    //     this.addressRef.current.value === null &&
    //     this.cityRef.current.value === null &&
    //     // this.countryRef.current.value === null &&
    //     this.phoneRef.current.value === null
    // ) {
    //   this.state.errors.push('Please enter a field to be edited!');
    //   return;
    // }

    const data = {
      first_name: this.firstNameRef.current.value,
      last_name: this.lastNameRef.current.value,
      email: this.emailRef.current.value,
      passwordRef: this.passwordRef.current.value,
      address: this.addressRef.current.value,
      city: this.cityRef.current.value,
      // country: this.countryRef.current.value,
      phone: this.phoneRef.current.value
    };

    this.props.editUserAction(data);
  }
}

export default EditProfile;
