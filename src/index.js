import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Dynamic from './Dynamic';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>  this is one way and other one is <></> shown in below
  //   {/* <App /> */}
  //   {/* <Header/> */}
  //   {/* <Menu/> */}
  // </React.StrictMode>

  <> 
  <App />
  <Header />
  <Dynamic />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
