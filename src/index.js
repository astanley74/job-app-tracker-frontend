import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import userReducer from './reducers/userReducer'
import JobApplicationInput from './components/JobApplicationInput';
import App from './App';
import User from './components/User';
import About from './components/About';
import LoginModal from './components/LoginModal'
import EditJobApplicationInput from './components/EditJobApplicationInput'
import JobAppView from './components/JobAppView';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(userReducer, composeEnhancers(
	applyMiddleware(thunk) 
	))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      	  <Route exact path="/" component= { App } />
          <Route path="/login" component= {LoginModal }/>
          <Route path="/home" component= { User } />
          <Route path="/about" component= { About }/> 
          <Route exact path='/job-app/:id' render={(routerProps) => <JobAppView {...routerProps} />} />
          <Route path="/add-job" component= { JobApplicationInput }/>
          <Route path="/edit-job" component= { EditJobApplicationInput }/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();