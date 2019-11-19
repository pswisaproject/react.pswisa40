import React, { Component } from 'react';
import styles from './Login.module.css';
import Input from '../../UI/FormElements/Input/Input';
import Button from '../../UI/Button/Button';
import ElemenentsErrors from '../../UI/ElementsErrors/ElementsErrors';
import AppComponentContext from '../../../contexts/AppComponentContext';

/**
 * error codes for form
 */
const FORM_ERROR_CODES = [1101, 1102, 1103, 1104, 1201, 1202];

class Login extends Component {
  state = { cssUsernameErrorStyleShow: false, cssPasswordErrorStyleShow: false };
  constructor (props) {
    super(props);
    this.inputEmailRef = React.createRef();
    this.inputPasswordRef = React.createRef();
  }

  componentDidMount () {
    this.inputEmailRef.current.focus();
    if (this.props.isError) {
      this.setState({ cssUsernameErrorStyleShow: true, cssPasswordErrorStyleShow: true });
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.isError !== this.props.isError && this.props.isError) {
      this.setState({ cssUsernameErrorStyleShow: true, cssPasswordErrorStyleShow: true });
    }
  }

  render () {
    return (
      <div className={[styles.LoginWrapper].join(' ')}>
        <div className={styles.LoginLabel}>Log in</div>
        <Input
          style={this.state.cssUsernameErrorStyleShow ? this.handleErrorsElementStyles() : {}}
          ref={this.inputEmailRef}
          label="Email"
          onFocus={this.handleOnFocus}
          placeholder="example@example.com"
        />
        <Input
          style={this.state.cssPasswordErrorStyleShow ? this.handleErrorsElementStyles() : {}}
          ref={this.inputPasswordRef}
          type='password'
          label="password"
          onFocus={this.handleOnFocus}
          placeholder="password"
        />
        <Button
          className={styles.LoginButton}
          value="LogIn"
          onClick={this.handleButtonClick}
          showLoader={this.props.isFetching}
        />
        {this.props.isError && <ElemenentsErrors errors={this.prepareInputErrorCodesFromApiResponse(FORM_ERROR_CODES)} />}
      </div>
    );
  }

  /**
   * We check if api response have desired error codes
   * @param {array} errCodes [11006, 11007]
   * @returns {array} array of codes that api response have and match with desired error codes
   */
  prepareInputErrorCodesFromApiResponse = (errCodes) => {
    return this.props.apiErrors &&
      this.props.apiErrors.errors &&
      this.props.apiErrors.errors
        .filter(e => errCodes.indexOf(e.error_code) > -1)
        .map((e, i) => errCodes.includes(e.error_code) && e.error_code);
  }

  handleButtonClick = (e) => {
    const email = this.inputEmailRef.current.value;
    const password = this.inputPasswordRef.current.value;
    this.props.handleSubmitButtonClick({ email, password });
  }

  handleErrorsElementStyles = () => {
    return { borderColor: 'red' };
  }

  handleOnFocus = (el) => {
    this.removeErrorCssStyles(el);
  }

  removeErrorCssStyles = (el) => {
    if (el.target.type === 'password') {
      this.setState({ cssPasswordErrorStyleShow: false });
    } else {
      this.setState({ cssUsernameErrorStyleShow: false });
    }
  }
}

Login.contextType = AppComponentContext;

export default Login;
