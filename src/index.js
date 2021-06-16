import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import userReducer from './reducers/userReducer'
import JobApplicationInput from './components/JobApplicationInput';
import App from './App';
import User from './components/User';
import About from './components/About';
import LoginModal from './components/LoginModal'
import Logout from './components/Logout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)



const store = createStore(persistedReducer, composeEnhancers(
	applyMiddleware(thunk) 
	))

  let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      	  <Route exact path="/" component= { App } />
          <Route path="/home" component= { User } />
          <Route path="/about" component= { About }/>
          <Route path="/login" component= {LoginModal }/> 
          <Route path='/logout' component= { Logout }/>
          <Route path="/add-job" component= { JobApplicationInput }/>
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();