import api from '../../assets/helpers/api';

import {
    API_PATIENT_INFO_REQUEST,
    API_PATIENT_INFO_SUCCESS,
    API_PATIENT_INFO_FAILURE
} from '../../constants/actions';

function loginRequest () {
  return { type: API_PATIENT_INFO_REQUEST };
}

function loginSuccess (response) {
  return {
    type: API_PATIENT_INFO_SUCCESS,
    response
  };
}

function loginError (error) {
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
    dispatch(loginRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(loginSuccess(response)))
      .catch(error => dispatch(loginError(error)));
  };
}
