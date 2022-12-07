// import logo from './logo.svg';
import './App.css';
// import LogInForm from './components/LogInForm';
import Navbar from './components/Navbar';
// import LandingPage from './pages/LandingPage';


// import React, {useEffect, useState} from 'react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="beth-jnr-NtfFqT8JBI0-unsplash.jpg" className="App-logo" alt="logo" /> */}
        <Navbar/>
        <div style={{marginTop: "1rem"}}  className="col-lg-8 align-self-baseline">
           <p style={{lineHeight: "1.7"}} className="landingpage">
            WHERE TECHNOLOGY MEETS EDUCATION
            <br />
            ACCESS YOUR GRADES FROM ANYWHERE AT ANYTIME
            <br />
            </p>
            </div>
        {/* <LandingPage/> */}
        {/* <LogInForm/> */}
      </header>
    </div>
  );
}

export default App;
