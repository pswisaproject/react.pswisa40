import configureStore from './configureStore';

const initalState = { undefined };//getReduxStateFromStorage();
const store = configureStore(initalState);

export default store;
