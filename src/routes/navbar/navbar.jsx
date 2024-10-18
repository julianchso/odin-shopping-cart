import { Link } from 'react-router-dom';
import NavbarSearch from './navbarSearch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import '../../app.css';
import './navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbarLeft'>
          <ul className='navbarBtn'>
            <li>
              <Link to={`home`}>Home</Link>
            </li>
            <li>
              <Link to={`shop`}>Shop</Link>
            </li>
          </ul>
        </div>
        <div className='navbarRight'>
          <NavbarSearch />
          <Link to={`cart`}>
            <button className='cartBtn'>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
