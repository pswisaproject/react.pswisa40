import configureStore from './configureStore';

const initalState = { };//getReduxStateFromStorage();
const store = configureStore(initalState);

export default store;
