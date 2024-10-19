import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // function getItemQty(id) {
  //   return cart.find((item) => item.id === id) ? qty : 0;
  // }

  function increaseQty(id) {
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

  function decreaseQty(id) {
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

  function setQty(id, qty) {
    console.log('setQty');

    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)) {
        return [...currItems, { id, quantity: qty }];
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
    increaseQty,
    decreaseQty,
    setQty,
    removeFromCart,
  };
  // console.log(typeof increaseQty);
  // console.log(providerValue);

  return (
    <>
      <ShoppingCartContext.Provider value={providerValue}>{children}</ShoppingCartContext.Provider>
    </>
  );
}

// ShoppingCartProvider.propTypes = {
//   children: PropTypes.func,
// };
