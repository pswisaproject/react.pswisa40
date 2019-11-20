import {
  LOGOUT,
  API_LOGIN_REQUEST,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAILURE
} from '../../constants/actions';

const initialState = {
  loggedIn: false,
  isFetching: null,
  error: null,
  timestamp: null,
  response: {},
  status: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case API_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        response: {},
        timestamp: new Date().toUTCString(),
        status: 'request'
      };
    case API_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isFetching: false,
        error: false,
        response: action.response,
        timestamp: new Date().toUTCString(),
        status: 'success'
      };
    case API_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        response: {},
        timestamp: new Date().toUTCString(),
        status: 'fail'
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        isFetching: false,
        error: false,
        response: {},
        timestamp: new Date().toUTCString()
      }
    default:
      return state;
  }
}
