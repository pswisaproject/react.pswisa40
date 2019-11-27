import api from '../../assets/helpers/api';

import {
  API_LOGIN_REQUEST,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAILURE
} from '../../constants/actions';

function loginRequest () {
  return { type: API_LOGIN_REQUEST };
}

function loginSuccess (response) {
  return {
    type: API_LOGIN_SUCCESS,
    response
  };
}

function loginError (error) {
  return {
    type: API_LOGIN_FAILURE,
    error
  };
}

export default function login (data) {
  const url = 'users/login';
  const method = 'POST';
  const headerData = {};
  return dispatch => {
    dispatch(loginRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(loginSuccess(response)))
      .catch(error => dispatch(loginError(error)));
  };
}
