import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/index.css';

import App from './App';
import Play from './Components/Play';
import SecondaryZone from './Components/SecondaryZone';

import { Provider } from "react-redux";
import store from './store.js'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' exact element={<App />} />
          <Route path='/play' element={<Play />} />
          <Route path='/graveyard' element={<SecondaryZone zone={'graveyard'} />} />
          <Route path='/exile' element={<SecondaryZone zone={'exile'} />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
