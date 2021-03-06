import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from '../components/NonAuthenticated/Register/Register';
import registerAction from '../store/actions/register';

class RegisterContainer extends Component {
  render () {
    return (
      <Register
        handleSubmitButtonClick={(e) => this.handleSubmitButtonClick(e)}
        isError={this.props.registerApiResponse.status === 'fail'}
        apiErrors={this.props.registerApiResponse.error}
        isFetching={this.props.registerApiResponse.isFetching}
      />
    );
  }

  handleSubmitButtonClick = ({ email, password, firstName, lastName, address, city, country, phone, healthcareId }) => {
    this.onHandleRegister(email, password, firstName, lastName, address, city, country, phone, healthcareId);
  }

  onHandleRegister = (email, password, firstName, lastName, address, city, country, phone, healthcareId) => {
    const data = { email, password, firstName, lastName, address, city, country, phone, id: healthcareId };
    this.props.registerAction(data);
  }
}

function mapStateToProps (state) {
  return {
    registerApiResponse: state.register
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      registerAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
