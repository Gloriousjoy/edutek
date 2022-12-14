import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from './components/Login';
import NewStudent from "./pages/NewStudent"
import NavBar from './components/NavBar';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<Router>
    <div>
        <NavBar />
    </div>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/pages/new-student' element={<NewStudent/>} />
    </Routes>
</Router>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals