import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/NonAuthenticated/Login/Login';
import loginAction from '../store/actions/login';

class LoginContainer extends Component {
  render () {
    return (
      <Login
        handleSubmitButtonClick={(e) => this.handleSubmitButtonClick(e)}
        isError={this.props.loginApiResponse.status === 'fail'}
        apiErrors={this.props.loginApiResponse.error}
        isFetching={this.props.loginApiResponse.isFetching}
      />
    );
  }

  handleSubmitButtonClick = ({ email, password }) => {
    this.onHandleLogin(email, password);
  }

  onHandleLogin = (email, password) => {
    const data = { email, password };
    this.props.loginAction(data);
  }
}

function mapStateToProps (state) {
  return {
    loginApiResponse: state.login
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      loginAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
