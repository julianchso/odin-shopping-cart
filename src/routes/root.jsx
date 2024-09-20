// add sidebar here
import { Outlet, Link } from 'react-router-dom';
import Navbar from './navbar/navbar';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
