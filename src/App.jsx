import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import Shop from './routes/shop';
import { ShoppingCart } from './routes/shoppingCart';

import './css/global.css';

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
        element: <ShoppingCart />,
      },
    ],
  },
]);

export default router;
