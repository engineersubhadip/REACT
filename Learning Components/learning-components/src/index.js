import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Puppy from './Components/Puppy';
import './Styles/Section-Container.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section className="section-container">
    <Puppy description="D1" text="puppy1" imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-dDhLNGEsRpj4Kwnd-5wgOPsz56F6hykFg&usqp=CAU"/>
    <Puppy description="D2" text="puppy2" imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlPSQhqETRKcKgHs8IV2OYClfI6tgdNWQPQ&usqp=CAU"/>
    <Puppy description="D3" text="puppy3" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuK7b8irCGaEKBI58Wl4Pow0SCISD2-aA-fQ&usqp=CAU"/>
    <Puppy description="D4" text="puppy4" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOca_7LVDwn4GFFQgGAUh2NGW-P7uRt5RGA&usqp=CAU"/>
    <Puppy description="D5" text="puppy5" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeF5cHJZWkiC9FZJD1G07CZT_5A_egAv4yDw&usqp=CAU"/>
  </section>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
