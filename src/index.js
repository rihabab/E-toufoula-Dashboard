import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { MyContextProvider } from './providers/userContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyContextProvider>
    <App />
  </MyContextProvider>,

);


