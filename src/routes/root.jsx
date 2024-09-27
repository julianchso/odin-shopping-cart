// add sidebar here
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
