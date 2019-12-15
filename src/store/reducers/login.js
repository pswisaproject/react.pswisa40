import {
  LOGOUT,
  API_LOGIN_REQUEST,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAILURE,
  API_EDIT_USER_SUCCESS,
  API_EDIT_USER_REQUEST,
  API_EDIT_USER_FAILURE
} from '../../constants/actions';

const initialState = {
  loggedIn: false,
  isFetching: null,
  error: null,
  timestamp: null,
  response: {},
  status: null,
  changedPassword: false
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
        status: 'success',
        changedPassword: action.response.data['changedPassword']
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
        timestamp: new Date().toUTCString(),
        status: 'success',
      }
    case API_EDIT_USER_REQUEST:
      return {
        ...state,
        error: false,
        response: action.response,
        timestamp: new Date().toUTCString(),
        status: 'request'
      };
    case API_EDIT_USER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isFetching: false,
        error: false,
        response: action.response,
        timestamp: new Date().toUTCString(),
        status: 'success',
        changedPassword: true
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
