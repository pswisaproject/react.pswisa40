import api from '../../assets/helpers/api';

import {
    API_EDIT_USER_REQUEST,
    API_EDIT_USER_SUCCESS,
    API_EDIT_USER_FAILURE
} from '../../constants/actions';

function editUserRequest () {
  return { type: API_EDIT_USER_REQUEST };
}

function editUserSuccess (response) {
  return {
    type: API_EDIT_USER_SUCCESS,
    response
  };
}

function editUserError (error) {
  return {
    type: API_EDIT_USER_FAILURE,
    error
  };
}

export default function editUser (data, headerData) {
  const url = 'users/editProfile';
  const method = 'POST';
  return dispatch => {
    dispatch(editUserRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(editUserSuccess(response)))
      .catch(error => dispatch(editUserError(error)));
  };
}
