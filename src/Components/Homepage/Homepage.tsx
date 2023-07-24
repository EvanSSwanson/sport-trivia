import React from 'react';
import logo from '../../logo.svg';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className='Homepage'>
        <div className='bar-left'></div>
        <div className='central-homepage'>
            <h1 className='select-title'>Select a Topic</h1>
        </div>
        <div className='bar-right'></div>
    </div>
  );
}

export default Homepage;