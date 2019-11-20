import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppComponentContext from '../contexts/AppComponentContext';
import NonAuthenticatedNavBar from '../components/NonAuthenticated/NonAuthenticatedNavBar/NonAuthenticatedNavBar';
import LoginContainer from './LoginContainer';

class AuthenticatedIndexContainer extends Component {

  render() {
    console.log('AuthenticatedTopContainer render()', this.props, this.state);
    return (
      <div>
        <NonAuthenticatedNavBar />
        <Switch>
          <Route path='/login' component={LoginContainer} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}
AuthenticatedIndexContainer.contextType = AppComponentContext;

function mapStateToProps(state) {
  return {
      //
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      //
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedIndexContainer)
);
