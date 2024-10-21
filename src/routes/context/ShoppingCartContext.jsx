import { useState, createContext, useContext, useEffect } from 'react';
import { ShoppingCart } from '../shoppingCart';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const cartQuantity = cart.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => {
    setIsOpen(true);
    console.log('cart is open');
  };
  const closeCart = () => {
    setIsOpen(false);
    console.log('cart is closed');
  };

  function getCartQty(id) {
    return cart.find((item) => item.id === id) ? item.quantity : 0;
  }

  function increaseCartQty(id) {
    console.log('increaseQty');
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cart);
  }

  function decreaseCartQty(id) {
    console.log('decreaseQty');
    setCart((currItems) => {
      // TODO: remove item if quantity is 1
      if (currItems.find((item) => item.id === id).quantity == 1) {
        return [...currItems, { id, quantity: 1 }];
        // TODO end
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cart);
  }

  function addShopQtyToCart(id, shopQty) {
    setCart((currItems) => {
      // console.log(currItems);
      console.log(currItems);
      if (!currItems.find((item) => item.id === id)) {
        return [...currItems, { id, quantity: shopQty }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + shopQty };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    console.log('removeFromCart');

    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const providerValue = {
    getCartQty,
    increaseCartQty,
    decreaseCartQty,
    addShopQtyToCart,
    removeFromCart,
    openCart,
    closeCart,
    // cartItems,
    cartQuantity,
  };

  return (
    <>
      <ShoppingCartContext.Provider value={providerValue}>
        {children}
        <ShoppingCart isOpen={isOpen} />
      </ShoppingCartContext.Provider>
    </>
  );
}

ShoppingCartProvider.propTypes = {
  openCart: PropTypes.func,
  closeCart: PropTypes.func,
  children: PropTypes.object,
  cartQuantity: PropTypes.number,
  cartItems: PropTypes.array,
  isOpen: PropTypes.bool,
};
