import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// create root element
const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

// create style element
const style = document.createElement("style");
const globalStylesTextNode = document.createTextNode(
  `
  #${rootElement.id} {
  position: fixed;
  left: 100px;
  top: 100px;
  width: 100px;
  height: 100px;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 999;
  }
`
);
style.appendChild(globalStylesTextNode);
var head = document.head || document.getElementsByTagName('head')[0];
head.appendChild(style);

/*
// set style attribute for root element (alternative way)
rootElement.setAttribute(
  "style", 
  "position: fixed;left: 0;top: 0;width: 300px;height: 100vh;background: #ffffff;border-right: 1px solid #c2c2c2;z-index: 999;"
  )
*/

document.body.appendChild(rootElement);

// render root element
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
