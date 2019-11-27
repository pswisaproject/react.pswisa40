import configureStore from './configureStore';
import { getReduxStateFromStorage } from '../assets/helpers/utils';

const initalState = getReduxStateFromStorage();
const store = configureStore(initalState);

export default store;
