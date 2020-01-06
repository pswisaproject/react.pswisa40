import api from '../../assets/helpers/api';

import {
    API_PENDING_USERS_REQUEST,
    API_PENDING_USERS_SUCCESS,
    API_PENDING_USERS_FAILURE
} from '../../constants/actions';

function getPendingUsersRequest () {
  return { type: API_PENDING_USERS_REQUEST };
}

function getPendingUsersSuccess (response) {
  return {
    type: API_PENDING_USERS_SUCCESS,
    response
  };
}

function getPendingUsersError (error) {
  return {
    type: API_PENDING_USERS_FAILURE,
    error
  };
}

export default function getPendingUsers (headerData) {
  const url = 'users/listPending';
  const method = 'GET';
  const data = {};
  return dispatch => {
    dispatch(getPendingUsersRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(getPendingUsersSuccess(response)))
      .catch(error => dispatch(getPendingUsersError(error)));
  };
}
