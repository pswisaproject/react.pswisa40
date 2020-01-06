import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthenticatedNavBar from '../components/Authenticated/AuthenticatedNavBar/AuthenticatedNavBar';
import { logout } from '../store/actions/logout';
import toggleAuthNavBar from '../store/actions/authNavBarState';
// import getPermissions from '../store/actions/getPermissions';

class AuthenticatedNavBarContainer extends Component {
  render () {
      // console.log('ovde sam sad', this.props);
    return (
      <>
        <AuthenticatedNavBar
          location={this.props.location}
          onLogout={() => this.onLogout()}
        //   permissions={this.props.permissions}
          theme={this.props.theme}
          toggleAuthNavBar={this.props.toggleAuthNavBar}
          authNavBarOpened={this.props.authNavBarOpened}
          session={this.props.headerData}
        />
      </>
    );
  }

  componentDidMount () {
    // this.props.getPermissions(this.props.headerData);
  }

  onLogout = () => {
    this.props.logout();
  }
}

function mapStateToProps (state) {
  return {
    headerData: state.session,
    // permissions: state.permissions.response.data,
    authNavBarOpened: state.authNavBarState.opened,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      logout,
    //   getPermissions,
      toggleAuthNavBar
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedNavBarContainer));
