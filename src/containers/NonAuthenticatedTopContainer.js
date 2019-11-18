import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppComponentContext from '../contexts/AppComponentContext';
// import AuthenticatedNavBar from '../components/Authenticated/AuthenticatedNavBar/AuthenticatedNavBar';

class AuthenticatedIndexContainer extends Component {

  render() {
    console.log('AuthenticatedTopContainer render()', this.props, this.state);
    return (
      <div>
          ne logovan
        {/* <AuthenticatedNavBar /> */}
        <Switch>
          {/* <Route path="/dashboard" component={Dashboard} />
          <Route path="/vehicleOffers" component={VehicleOffers} />
          <Route path="/cargoOffers" component={CargoOffers} />
          <Route path="/warehouseOffers" component={WarehouseOffers} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/dashboard" /> */}
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
