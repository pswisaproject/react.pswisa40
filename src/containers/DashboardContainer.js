import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../components/Authenticated/Dashboard/Dashboard';
import getPatientInfo from '../store/actions/getPatientInfo';

class DashboardContainer extends Component {
  state = {
    patientInfo: {}
  }

  componentDidMount() {
    this.setState({
      patientInfo: this.props.getPatientInfo(this.props.session.Ht)
    });
  }

  render () {
    console.log(this.props.session.Ht, 'HT');
    return <Dashboard 
      patientInfo={this.props.patientInfo.response}
    />;
  }

  getPatientInfo = () => {

  }
}

function mapStateToProps (state) {
  return {
    session: state.session,
    patientInfo: state.patientInfo
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getPatientInfo: getPatientInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
