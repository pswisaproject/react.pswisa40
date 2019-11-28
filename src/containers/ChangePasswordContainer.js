import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../store/actions/logout';
import Input from '../components/UI/FormElements/Input/Input';
import Button from '../components/UI/Button/Button';
import styles from '../components/NonAuthenticated/Login/Login.module.css';

class ChangePasswordContainer extends Component {
  state = { cssUsernameErrorStyleShow: false, cssPasswordErrorStyleShow: false };
  constructor (props) {
    super(props);
    this.inputPasswordRef = React.createRef();
    this.inputPasswordRepeatRef = React.createRef();
  }
  componentDidMount () {
    this.inputPasswordRef.current.focus();
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
      <>
        <li onClick={() => this.props.logout()}>Logout</li>
        <Input
          style={this.state.cssUsernameErrorStyleShow ? this.handleErrorsElementStyles() : {}}
          ref={this.inputPasswordRef}
          type='password'
          label="Enter a new password"
          onFocus={this.handleOnFocus}
          placeholder="password"
        />
        <Input
          style={this.state.cssPasswordErrorStyleShow ? this.handleErrorsElementStyles() : {}}
          ref={this.inputPasswordRepeatRef}
          type='password'
          label="Reenter the new password"
          onFocus={this.handleOnFocus}
          placeholder="password"
        />
        <Button
          className={styles.LoginButton}
          value="Change password"
          onClick={this.handleButtonClick}
          showLoader={this.props.isFetching}
        />
      </>
    );
  }

  handleButtonClick = () => {
    console.log('change the password please', this.inputPasswordRef.current.value, this.inputPasswordRepeatRef.current.value);
  }
}

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      logout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);