// import logo from './logo.svg';
import './App.css';
import LogInForm from './components/LogInform';
import Navbar from './components/Navbar';

// import React, {useEffect, useState} from 'react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="beth-jnr-NtfFqT8JBI0-unsplash.jpg" className="App-logo" alt="logo" /> */}
        <Navbar/>
        <LogInForm/>
      </header>
    </div>
  );
}

export default App;
