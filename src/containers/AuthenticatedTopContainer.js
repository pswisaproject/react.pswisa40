import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppComponentContext from '../contexts/AppComponentContext';
import DashboardContainer from '../containers/DashboardContainer';
import ClinicsContainer from './ClinicsContainer';
import AuthenticatedNavBar from '../components/Authenticated/AuthenticatedNavBar/AuthenticatedNavBar';
import AuthenticatedNavBarContainer from '../containers/AuthenticatedNavBarContainer';
import ChangePasswordContainer from './ChangePasswordContainer';

class AuthenticatedIndexContainer extends Component {
  render () {
    // console.log('AuthenticatedTopContainer render()', this.props.changedPassword, this.props.session, this.props.response.data);
    return (
      this.changedPasswordCheck()
    );
  }

  changedPasswordCheck () {
    if (this.props.changedPassword == 0) {
      return (
        <ChangePasswordContainer />
      );
    }
    else if (this.props.changedPassword == 1) {
      return (
        <>
          <AuthenticatedNavBarContainer />
          <Switch>
            <Route path="/dashboard" component={DashboardContainer} />
            <Route path="/clinics" component={ClinicsContainer} />
            <Redirect to="/dashboard" />
          </Switch>
        </>
      );
    }
  }
}
AuthenticatedIndexContainer.contextType = AppComponentContext;

function mapStateToProps (state) {
  return {
      response: state.login.response,
      changedPassword: state.login.changedPassword,
      session: state.session
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      //
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedIndexContainer)
);
