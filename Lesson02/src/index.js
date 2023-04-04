import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HideTextHandler from './HideTextHandler';
import ChangeBtnTextHandler from './ChangeBtnTextHandler';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HideTextHandler/>
    <ChangeBtnTextHandler/>
  </React.StrictMode>
);

 