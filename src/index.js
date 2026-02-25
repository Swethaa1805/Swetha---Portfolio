import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
document.addEventListener("mousemove", (e) => {
  const sprinkle = document.createElement("div");
  sprinkle.classList.add("sprinkle");
  sprinkle.style.left = e.pageX + "px";
  sprinkle.style.top = e.pageY + "px";

  document.body.appendChild(sprinkle);

  // Remove the sparkle after animation
  setTimeout(() => {
    sprinkle.remove();
  }, 500);
});