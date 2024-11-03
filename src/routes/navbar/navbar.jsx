import { Link } from 'react-router-dom';
// import NavbarSearch from './navbarSearch';
import { useShoppingCart } from '../context/ShoppingCartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './navbar.css';
import '../../css/app.css';
import '../../css/global.css';

export default function Navbar() {
  const { openCart, closeCart, cartQuantity } = useShoppingCart();
  return (
    <>
      <nav className='navbar'>
        <div className='navbarLeft'>
          <img src='src/media/pokeStoreLogo.png' alt='pokeStoreLogo' id='pokeStoreLogo' />
          <ul className='navbarBtn'>
            <li>
              <Link to={`/shopping-cart-pokemon/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/shopping-cart-pokemon/shop`}>Shop</Link>
            </li>
          </ul>
        </div>
        <div className='navbarRight'>
          {/* <NavbarSearch /> */}
          <Link to={`/shopping-cart-pokemon/cart`}>
            <div className='cartBtnCtn'>
              <button className='cartBtn' onClick={openCart}>
                <FontAwesomeIcon className='cartBtnIcon' icon={faCartShopping} />
              </button>
              <div className='cartQuantity'>{cartQuantity}</div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
