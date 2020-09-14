import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CommonProvider } from './contexts/Common';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CommonProvider>
        <App />
      </CommonProvider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);
