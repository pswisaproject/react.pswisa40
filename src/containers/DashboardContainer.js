import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../components/Authenticated/Dashboard/Dashboard';
import getPatientInfo from '../store/actions/getPatientInfo';

class DashboardContainer extends Component {
  componentDidMount() {
    this.getPatientInfo();
  }

  render () {
    return <Dashboard 
      patientInfo={this.props.patientInfo}
    />;
  }

  getPatientInfo = () => {
    return this.props.getPatientInfo(this.props.session);
  }
}

function mapStateToProps (state) {
  return {
    session: state.session,
    patientInfo: state.patientInfo.response.data
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getPatientInfo: getPatientInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
