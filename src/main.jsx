import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './App.jsx';

import { ShoppingCartProvider } from './routes/context/ShoppingCartContext.jsx';
import { SearchBarProvider } from './routes/context/SearchbarContext.jsx';

import './css/reset.css';
import './css/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='contentWrapper'>
      <SearchBarProvider>
        <ShoppingCartProvider>
          <RouterProvider router={router} />
        </ShoppingCartProvider>
      </SearchBarProvider>
    </div>
  </React.StrictMode>
);
