import api from '../../assets/helpers/api';

import {
  API_EDIT_USER_REQUEST,
  API_EDIT_USER_SUCCESS,
  API_EDIT_USER_FAILURE
} from '../../constants/actions';

function editRequest () {
  return { type: API_EDIT_USER_REQUEST };
}

function editSuccess (response) {
  return {
    type: API_EDIT_USER_SUCCESS,
    response
  };
}

function editError (error) {
  return {
    type: API_EDIT_USER_FAILURE,
    error
  };
}

export default function editUser (data, headerData) {
  const url = 'users/editProfile';
  const method = 'POST';
  return dispatch => {
    dispatch(editRequest());
    return api(url, data, method, headerData)
      .then(response => dispatch(editSuccess(response)))
      .catch(error => dispatch(editError(error)));
  };
}
