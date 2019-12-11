import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../components/Authenticated/Dashboard/Dashboard';
import getPatientInfo from '../store/actions/getPatientInfo';
// import getMedicalInfo from '../store/actions/getMedicalInfo';
import getMedicalInfo from '../store/actions/getMedicalInfo';

class DashboardContainer extends Component {
  componentDidMount() {
    this.getPatientInfo();
    this.props.getMedicalInfo(this.props.session);
  }

  render () {
    return <Dashboard 
      patientInfo={this.props.patientInfo}
      medicalInfo={this.props.medicalInfo}
    />;
  }

  getPatientInfo = () => {
    return this.props.getPatientInfo(this.props.session);
  }
}

function mapStateToProps (state) {
  return {
    session: state.session,
    patientInfo: state.patientInfo.response.data,
    medicalInfo: state.medicalInfo.response.data
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getPatientInfo: getPatientInfo,
      getMedicalInfo: getMedicalInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
