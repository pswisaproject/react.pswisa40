import {
    LOGOUT
  } from '../../constants/actions';
    
  function setLoggedOut () {
    return {
      type: LOGOUT
    };
  }
  
  export function logout () {  
    return dispatch => {
        return dispatch(setLoggedOut());
    };
  }
  