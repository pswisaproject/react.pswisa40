import { combineReducers } from 'redux';
import login from './login';

const appReducer = combineReducers({
  /* application top-level reducers */
  login
//   theme,
//   language,
//   loggedInStatus
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;