import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppComponentContext from '../contexts/AppComponentContext';
import Dashboard from '../components/Authenticated/Dashboard/Dashboard';
import AuthenticatedNavBar from '../components/Authenticated/AuthenticatedNavBar/AuthenticatedNavBar';
import ChangePasswordContainer from './ChangePasswordContainer';

class AuthenticatedIndexContainer extends Component {
  render () {
    console.log('AuthenticatedTopContainer render()', this.props.session, this.props.response.data);
    return (
      this.changedPasswordCheck()
    );
  }

  changedPasswordCheck () {
    if (this.props.response.data['changedPassword'] == 0) {
      return (
        <ChangePasswordContainer />
      );
    }
    else if (this.props.response.data['changedPassword'] == 1) {
      return (
        <div>
          <AuthenticatedNavBar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
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
