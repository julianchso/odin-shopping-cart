import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Index from './routes';
import Home from './routes/home';
import Shop from './routes/shop';
import './index.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
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
  // {
  //   path: 'home',
  //   element: <Home />,
  // },
]);

export default router;
