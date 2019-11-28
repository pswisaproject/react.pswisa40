import api from '../../assets/helpers/api';
import {
  API_REGISTER_REQUEST,
  API_REGISTER_SUCCESS,
  API_REGISTER_FAILURE
} from '../../constants/actions';

function registerRequest () {
  return { type: API_REGISTER_REQUEST };
}

function registerSuccess (response) {
  return {
    type: API_REGISTER_SUCCESS,
    response
  };
}

function registerError (error) {
  return {
    type: API_REGISTER_FAILURE,
    error
  };
}

export default function register (data) {
  const url = 'users/register';
  const method = 'POST';
  const headerData = {};
  return dispatch => {
    dispatch(registerRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(registerSuccess(response)))
      .catch(error => dispatch(registerError(error)));
  };
}
