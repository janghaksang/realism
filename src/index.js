import React from 'react';
import ReactDOM from 'react-dom/client';
import Recoil from 'recoil';
import Realism from 'realism';

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

Realism.ready(()=>root.render(
  <React.StrictMode>
    <Recoil.RecoilRoot>
      <App />
    </Recoil.RecoilRoot>
  </React.StrictMode>
));
