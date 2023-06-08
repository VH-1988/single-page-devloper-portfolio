import './index.css';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import brain from './brain.png';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <img src={brain}/>
      <div className='test'></div>
    </div>
  )
};

export default App;

