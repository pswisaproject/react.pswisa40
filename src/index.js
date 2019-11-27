import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { saveReduxStateToStorage } from './assets/helpers/utils';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

ReactDOM.render(app, document.getElementById('root'));

window.addEventListener('unload', function(event) {
  saveReduxStateToStorage(store.getState());
});

// serviceWorker.unregister();
