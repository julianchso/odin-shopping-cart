import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import Shop from './routes/shop';
import './app.css';
import './reset.css';

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
    ],
  },
]);

export default router;
