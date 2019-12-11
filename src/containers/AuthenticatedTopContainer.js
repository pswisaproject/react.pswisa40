import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppComponentContext from '../contexts/AppComponentContext';
import DashboardContainer from '../containers/DashboardContainer';
import AuthenticatedNavBar from '../components/Authenticated/AuthenticatedNavBar/AuthenticatedNavBar';
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
        <div>
          <AuthenticatedNavBar />
          <Switch>
            <Route path="/dashboard" component={DashboardContainer} />
            <Redirect to="/dashboard" />
          </Switch>
        </div>
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
