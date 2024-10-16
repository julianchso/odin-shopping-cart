import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import Shop from './routes/shop';
import Cart from './routes/cart';

import './reset.css';
import './global.css';
import './app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
