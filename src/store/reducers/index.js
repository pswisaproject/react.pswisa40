import { combineReducers } from 'redux';
import login from './login';
import register from './register';
import session from './sessionData';
import patientInfo from './getPatientInfo';
import medicalInfo from './getMedicalInfo';
import searchClinics from './searchClinics';
import authNavBarState from './authNavBarState';
import pendingUsers from './getPendingUsers';
import handleUserRegistration from './handleUserRegistration';

const appReducer = combineReducers({
  /* application top-level reducers */
  login,
  register,
  session,
  patientInfo,
  medicalInfo,
  pendingUsers,
  searchClinics,
  authNavBarState,
  handleUserRegistration
//   theme,
//   language,
//   loggedInStatus
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;