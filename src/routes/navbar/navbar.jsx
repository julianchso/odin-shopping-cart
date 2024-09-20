import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import NavbarSearch from './navbarSearch';
import './navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbarLeft'>
          <ul>
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
          <button className='cartBtn'>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </nav>
    </>
  );
}
