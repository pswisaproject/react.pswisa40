import api from '../../assets/helpers/api';

import {
    API_CLINICS_SEARCH_REQUEST,
    API_CLINICS_SEARCH_SUCCESS,
    API_CLINICS_SEARCH_FAILURE
} from '../../constants/actions';

function clinicSearchRequest () {
  return { type: API_CLINICS_SEARCH_REQUEST };
}

function clinicSearchSuccess (response) {
  return {
    type: API_CLINICS_SEARCH_SUCCESS,
    response
  };
}

function clinicSearchError (error) {
  return {
    type: API_CLINICS_SEARCH_FAILURE,
    error
  };
}

export default function getClinicSearch (headerData, searchData) {
  const url = 'users/searchClinics';
  const data = searchData;
  const method = 'POST';
  return dispatch => {
    dispatch(clinicSearchRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(clinicSearchSuccess(response)))
      .catch(error => dispatch(clinicSearchError(error)));
  };
}
