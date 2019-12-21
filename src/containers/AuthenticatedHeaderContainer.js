import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toggleAuthNavBar from '../store/actions/authNavBarState';
import AuthenticatedHeader from '../components/Authenticated/AuthenticatedHeader/AuthenticatedHeader';

class AuthenticatedHeaderContainer extends Component {
  render () {
    return <AuthenticatedHeader toggleAuthNavBar={this.props.toggleAuthNavBar} authNavBarOpened={this.props.authNavBarOpened} />;
  }
}

function mapStateToProps (state) {
  return {
    authNavBarOpened: state.authNavBarState.opened
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      toggleAuthNavBar
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedHeaderContainer);
