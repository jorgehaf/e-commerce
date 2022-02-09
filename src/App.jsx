import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import {
  Route,
  Routes
} from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import './App.css'


const App = () => {

  return (
    <Provider store={store}>
      <div id='app'>
        <Header id="header" />
        <Routes id="routes">
          <Route path="/"
            element={
              <Home />
            } />
          <Route path="/Cart"
            element={
              <Cart />
            } />
        </Routes>
      </div>
    </Provider>
  )
}

export default App;