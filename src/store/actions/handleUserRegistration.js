import api from '../../assets/helpers/api';

import {
    API_HANDLE_USER_REGISTRATION_REQUEST,
    API_HANDLE_USER_REGISTRATION_SUCCESS,
    API_HANDLE_USER_REGISTRATION_FAILURE
} from '../../constants/actions';

function getPendingUsersRequest () {
  return { type: API_HANDLE_USER_REGISTRATION_REQUEST };
}

function getPendingUsersSuccess (response) {
  return {
    type: API_HANDLE_USER_REGISTRATION_SUCCESS,
    response
  };
}

function getPendingUsersError (error) {
  return {
    type: API_HANDLE_USER_REGISTRATION_FAILURE,
    error
  };
}

export default function getPendingUsers (data, headerData) {
  const url = 'users/handleUserRegister';
  const method = 'POST';
  return dispatch => {
    dispatch(getPendingUsersRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(getPendingUsersSuccess(response)))
      .catch(error => dispatch(getPendingUsersError(error)));
  };
}
