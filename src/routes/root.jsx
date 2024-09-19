// add sidebar here
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Root() {
  return (
    <>
      <nav>
        <div className='mainNav'>
          <ul>
            <li>
              <Link to={`home`}>Home</Link>
            </li>
            <li>
              <Link to={`shop`}>Shop</Link>
            </li>
          </ul>
        </div>
        <div className='cartContainer'>
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
