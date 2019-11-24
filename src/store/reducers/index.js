import { combineReducers } from 'redux';
import login from './login';
import register from './register';

const appReducer = combineReducers({
  /* application top-level reducers */
  login,
  register
//   theme,
//   language,
//   loggedInStatus
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;