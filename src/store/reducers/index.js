import { combineReducers } from 'redux';
import login from './login';
import register from './register';
import session from './sessionData';

const appReducer = combineReducers({
  /* application top-level reducers */
  login,
  register,
  session
//   theme,
//   language,
//   loggedInStatus
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;