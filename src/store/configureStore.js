import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk)
    )
  );
};

export default configureStore;
