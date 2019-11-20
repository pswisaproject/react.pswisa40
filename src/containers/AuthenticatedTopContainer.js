import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppComponentContext from '../contexts/AppComponentContext';
import Dashboard from '../components/Authenticated/Dashboard/Dashboard';
import AuthenticatedNavBar from '../components/Authenticated/AuthenticatedNavBar/AuthenticatedNavBar';

class AuthenticatedIndexContainer extends Component {
  render () {
    console.log('AuthenticatedTopContainer render()');
    return (
      <div>
        <AuthenticatedNavBar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          {/* redirect to some page if no match found */}
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    );
  }
}
AuthenticatedIndexContainer.contextType = AppComponentContext;

function mapStateToProps (state) {
  return {
      //
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
