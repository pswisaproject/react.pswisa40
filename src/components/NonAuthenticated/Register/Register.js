import React, { Component } from 'react';
import styles from './Register.module.css';
import Input from '../../UI/FormElements/Input/Input';
import Button from '../../UI/Button/Button';
import { prepareInputErrorCodesFromApiResponse } from '../../../assets/helpers/common';

const FORM_ERROR_CODES = [];

class Register extends Component {
  state = {
    // style errors
    apiResponseErrors: []
  };

  constructor (props) {
    super(props);
		this.inputEmailRef = React.createRef();
		this.inputPasswordRef = React.createRef();
		this.inputFirstNameRef = React.createRef();
		this.inputLastNameRef = React.createRef();
		this.inputAddressRef = React.createRef();
		this.inputCityRef = React.createRef();
		this.inputCountryRef = React.createRef();
		this.inputSubmitButtonRef = React.createRef();
  }

  componentDidMount () {
    this.inputEmail.current.focus();
    if (this.props.isError) {
      this.setState({
        // set style errors true
        apiResponseErrors: this.props.apiErrors.errors
      });
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.isError !== this.props.isError && this.props.isError) {
      this.setState({
        apiResponseErrors: this.props.apiErrors.errors
      });
    }
  }

  render () {
    return (
      <div className={styles.RegisterWrapper}>
				<div className={styles.RegisterLabel}>Registration Form</div>
				<Input
					ref={this.inputEmailRef}
					type='email'
					label={'Email address'}
					onFocus={() => this.handleOnFocus(this.inputEmailRef)}
					placeholder={'Enter your email address'}
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
				/>
				<Input
					ref={this.inputPasswordRef}
					type='password'
					label='Password'
					onFocus={() => this.handleOnFocus(this.inputPasswordRef)}
					placeholder='Enter your password'
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
					/>
				<Input
					ref={this.inputFirstNameRef}
					label='First Name'
					onFocus={() => this.handleOnFocus(this.inputFirstNameRef)}
					placeholder='Enter your first name'
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
				/>
				<Input
					ref={this.inputLastNameRef}
					label='Last Name'
					onFocus={() => this.handleOnFocus(this.inputLastNameRef)}
					placeholder='Enter your last name'
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
				/>
				<Input
					ref={this.inputAddressRef}
					label='Address'
					onFocus={() => this.handleOnFocus(this.inputAddressRef)}
					placeholder='Input your address'
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
				/>
				<Input
					ref={this.inputCityRef}
					label='City of residence'
					onFocus={() => this.handleOnFocus(this.inputCityRef)}
					placeholder='Input your city'
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
				/>
				<Input
					ref={this.inputCountryRef}
					label='Country'
					onFocus={() => this.handleOnFocus(this.inputCountryRef)}
					placeholder='Input your country'
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
				/>
				<Input
					ref={this.inputPhoneRef}
					label='Phone number'
					onFocus={() => this.handleOnFocus(this.inputPhoneRef)}
					placeholder='Enter your phone number'
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
				/>
				<Input
					ref={this.inputHealthcareIdRef}
					label='Healthcare ID'
					onFocus={() => this.handleOnFocus(this.inputHealthcareIdRef)}
					placeholder='Enter your healthcare ID'
					onKeyDownPress={(e) => e.key === 'Enter' && this.inputSubmitButtonRef.current.click()}
				/>
				<Button
					ref={this.inputSubmitButtonRef}
					className={styles.RegisterButton}
					value='Register'
					onClick={this.handleButtonClick}
					showLoader={this.props.isFetching}
				/>
      </div>
    );
  }

  handleButtonClick = (e) => {
		const email = this.inputEmailRef.current.value;
    const password = this.inputPasswordRef.current.value;
    const firstName = this.inputFirstNameRef.current.value;
		const lastName = this.inputLastNameRef.current.value;
		const address = this.inputAddressRef.current.value;
		const city = this.inputCityRef.current.value;
		const country = this.inputCountryRef.current.value;
		const phone = this.inputPhoneRef.current.value;
		const healthcareId = this.inputHealthcareIdRef.current.value;

    this.props.handleSubmitButtonClick({ email, password, firstName, lastName, address, city, country, phone, healthcareId });
  }

  checkInputFieldErrors = (formErrorCodes, apiErrorCodes) => {
    
  }

  handleErrorsElementStyles = () => {
    return { borderColor: 'red' };
  }

  handleOnFocus = (ref) => {
    this.removeErrorCssStyles(ref);
  }

  removeErrorCssStyles = (ref) => {
    switch (ref) {
      default:
        break;
    }
  }
}

export default Register;
