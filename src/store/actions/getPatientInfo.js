import api from '../../assets/helpers/api';

import {
    API_PATIENT_INFO_REQUEST,
    API_PATIENT_INFO_SUCCESS,
    API_PATIENT_INFO_FAILURE
} from '../../constants/actions';

function patientInfoRequest () {
  return { type: API_PATIENT_INFO_REQUEST };
}

function patientInfoSuccess (response) {
  return {
    type: API_PATIENT_INFO_SUCCESS,
    response
  };
}

function patientInfoError (error) {
  return {
    type: API_PATIENT_INFO_FAILURE,
    error
  };
}

export default function getPatientInfo (headerData) {
  const url = 'users/getUserInfo';
  const data = {};
  const method = 'GET';
  return dispatch => {
    dispatch(patientInfoRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(patientInfoSuccess(response)))
      .catch(error => dispatch(patientInfoError(error)));
  };
}
