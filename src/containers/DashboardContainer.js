import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../components/Authenticated/Dashboard/Dashboard';

class DashboardContainer extends Component {
  render () {
    return <Dashboard />;
  }
}

function mapStateToProps (state) {
  return {
      
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
        
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
