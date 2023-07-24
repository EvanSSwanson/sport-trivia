import React from 'react';
import logo from '../../logo.svg';
import { Route, Routes, NavLink } from "react-router-dom"
import Header from '../Header/Header'
import HomePage from '../Homepage/Homepage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
