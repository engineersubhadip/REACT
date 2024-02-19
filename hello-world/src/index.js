import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const Experience = function(){
//   return (
//     <div>
//       <h2>My Experience</h2>
//       <ul>
//         <li>Accenture</li>
//         <li>Teaching Assistant</li>
//       </ul>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // <div>
  //   <h1>Hello React World</h1>
  //   <Experience/>
    
  // </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
