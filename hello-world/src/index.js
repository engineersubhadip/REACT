import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Experience = function(){
  return(
    <div>
    <h2>Companies Name</h2>
    <ul>
      <li>Microsoft</li>
      <li>PhonePe</li>
      <li>MoEngage</li>
      <li>Lime Chat</li>
    </ul>
    </div>
  )
}


const BasicDetails = function(){
  return(
    <div>
      <h2>Chirag Goel</h2>
      <h3>Engineer | Teacher | Open Source Contributor</h3>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div>
    <BasicDetails/>
    <Experience/>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
