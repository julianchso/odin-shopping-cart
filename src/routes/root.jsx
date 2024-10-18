// add sidebar here
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
