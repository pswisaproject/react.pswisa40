import {
    API_REGISTER_REQUEST,
    API_REGISTER_SUCCESS,
    API_REGISTER_FAILURE
  } from '../../constants/actions';
  
  const initialState = {
    isFetching: null,
    error: null,
    timestamp: null,
    response: {},
    status: null
  };
  
  export default function reducer (state = initialState, action = {}) {
    switch (action.type) {
      case API_REGISTER_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: false,
          response: {},
          timestamp: new Date().toUTCString(),
          status: 'request'
        };
      case API_REGISTER_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: false,
          response: action.response,
          timestamp: new Date().toUTCString(),
          status: 'success'
        };
      case API_REGISTER_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.error,
          response: {},
          timestamp: new Date().toUTCString(),
          status: 'fail'
        };
      default:
        return state;
    }
  }
  