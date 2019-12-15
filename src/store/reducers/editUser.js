import {
    API_EDIT_USER_SUCCESS,
    API_EDIT_USER_REQUEST,
    API_EDIT_USER_FAILURE
  } from '../../constants/actions';
  
  const initialState = {
    isFetching: null,
    error: null,
    timestamp: null,
    response: {},
    status: null
  };
  

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case API_EDIT_USER_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: false,
          response: action.response,
          timestamp: new Date().toUTCString(),
          status: 'request'
        };
      case API_EDIT_USER_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: false,
          response: action.response,
          timestamp: new Date().toUTCString(),
          status: 'success',
        };
      case API_EDIT_USER_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: true,
          response: action.response,
          timestamp: new Date().toUTCString(),
          status: 'fail'
        };
      default:
        return state;
    }
  }
  