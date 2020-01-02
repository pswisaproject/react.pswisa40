import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clinics from '../components/Authenticated/Clinics/Clinics';
import searchClinics from '../store/actions/searchClinics';

class ClinicsContainer extends Component {
  render () {
    return <Clinics
      searchClinicsAction={this.searchClinicsAction}
      searchClinicsDataResponse={this.props.searchClinicsData}
    />;
  }

  searchClinicsAction = (data) => {
    this.props.searchClinics(this.props.session, data);
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
