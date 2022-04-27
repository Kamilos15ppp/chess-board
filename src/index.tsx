import React from 'react';
import ReactDOM from 'react-dom/client';

import Root from './views/Root';
import Providers from './providers/Providers';

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <Root />
    </Providers>
  </React.StrictMode>
);
