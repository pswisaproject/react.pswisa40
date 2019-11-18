import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppComponentContext from './contexts/AppComponentContext';
import AuthenticatedTopContainer from './containers/AuthenticatedTopContainer';
import NonAuthenticatedTopContainer from './containers/NonAuthenticatedTopContainer';

import './App.css';

class App extends Component {
  static contextType = AppComponentContext;

  render() {
    // strings.setLanguage(this.props.language);
    return (
      <AppComponentContext.Provider value={{  }}>
        {this.layoutSelector()}
      </AppComponentContext.Provider>
    );
  }

  layoutSelector() {
    let { loggedIn } = this.props;
    const layout = !loggedIn ? (
      <NonAuthenticatedTopContainer />
    ) : (
        <AuthenticatedTopContainer />
      );
    return layout;
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    //
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);