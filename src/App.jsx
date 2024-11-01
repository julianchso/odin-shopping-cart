import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import Shop from './routes/shop';
import { ShoppingCart } from './component/ShoppingCart';

import './css/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/shopping-cart-pokemon/',
        element: <Home />,
      },
      {
        path: '/shopping-cart-pokemon/home',
        element: <Home />,
      },
      {
        path: '/shopping-cart-pokemon/shop',
        element: <Shop />,
      },
      {
        path: '/shopping-cart-pokemon/cart',
        element: <ShoppingCart />,
      },
    ],
  },
]);

export default router;
