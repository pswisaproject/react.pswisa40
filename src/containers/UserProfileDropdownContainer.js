import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../store/actions/logout';
import UserProfileDropdown from '../components/UI/UserProfileDropdown/UserProfileDropdown';

class UserProfileDropdownContainer extends Component {
  render () {
    return <UserProfileDropdown handleLogout={this.logout} />;
  }

  logout = () => {
    this.props.logout();
  }
}

function mapStateToProps (state) {
  return {
      //
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      logout
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileDropdownContainer);
