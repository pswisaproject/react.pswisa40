import {
    LOGOUT
  } from '../../constants/actions';
import { deleteReduxStateFromStorage } from '../../assets/helpers/utils';
    
  function setLoggedOut () {
    deleteReduxStateFromStorage();
    return {
      type: LOGOUT
    };
  }
  
  export function logout () {  
    return dispatch => {
        return dispatch(setLoggedOut());
    };
  }
  