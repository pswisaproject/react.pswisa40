import { SET_AUTH_NAV_BAR } from '../../constants/actions';

function setOpened () {
  return {
    type: SET_AUTH_NAV_BAR
  };
}

export default function toggleAuthNavBar () {
  return dispatch => {
    return dispatch(setOpened());
  };
}
