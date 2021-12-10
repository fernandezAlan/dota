import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home.js';
import Nav from './components/Nav/Nav'
import { HeroesContextProvider } from './contexts/HeroesContext';
import {HeroContextProvider} from './contexts/HeroContext'
ReactDOM.render(
  <React.StrictMode>
    <HeroContextProvider>
      <HeroesContextProvider>
        <Nav />
        <Home />
      </HeroesContextProvider>
    </HeroContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

