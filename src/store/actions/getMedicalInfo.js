import api from '../../assets/helpers/api';

import {
    API_MEDICAL_INFO_REQUEST,
    API_MEDICAL_INFO_SUCCESS,
    API_MEDICAL_INFO_FAILURE
} from '../../constants/actions';

function medicalInfoRequest () {
  return { type: API_MEDICAL_INFO_REQUEST };
}

function medicalInfoSuccess (response) {
  return {
    type: API_MEDICAL_INFO_SUCCESS,
    response
  };
}

function medicalInfoError (error) {
  return {
    type: API_MEDICAL_INFO_FAILURE,
    error
  };
}

export default function getMedicalInfo (headerData) {
  const url = 'users/getUserMedicalRecords';
  const data = {};
  const method = 'GET';
  return dispatch => {
    dispatch(medicalInfoRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(medicalInfoSuccess(response)))
      .catch(error => dispatch(medicalInfoError(error)));
  };
}
