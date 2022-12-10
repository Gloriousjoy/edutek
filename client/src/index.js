import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Routes, Route} from "react-router-dom";
import About from "./components/About"

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<BrowserRouter>
<Routes>
            <Route path="/" element={<About />} />
            </Routes>
    <App />
</BrowserRouter>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals