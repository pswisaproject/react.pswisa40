import { combineReducers } from 'redux';
import login from './login';
import register from './register';
import session from './sessionData';
import patientInfo from './getPatientInfo';
import medicalInfo from './getMedicalInfo';

const appReducer = combineReducers({
  /* application top-level reducers */
  login,
  register,
  session,
  patientInfo,
  medicalInfo
//   theme,
//   language,
//   loggedInStatus
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;