import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clinics from '../components/Authenticated/Clinics/Clinics';
import searchClinics from '../store/actions/searchClinics';

class ClinicsContainer extends Component {
  render () {
    return <Clinics
      searchClinicsAction={this.props.searchClinics}
      searchClinicsDataResponse={this.props.searchClinicsData}
      sessionData={this.props.session}
    />;
  }
}

function mapStateToProps (state) {
  return {
    session: state.session,
    searchClinicsData: state.searchClinics.response.data
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      searchClinics: searchClinics
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClinicsContainer);
