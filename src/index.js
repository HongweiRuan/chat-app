import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers'
import setupSocket from './sockets';
import handleNewMessage from './sagas'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware]
})

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //every components in App can have access to store
  <Provider store={store}>
    <App />  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

