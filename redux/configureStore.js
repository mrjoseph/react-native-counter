
import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

// Applying middleware
const middleware = [
  thunk,
  logger,
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

export default store;
