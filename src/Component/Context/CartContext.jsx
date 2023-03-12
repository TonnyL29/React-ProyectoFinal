import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const restItem = (item, cantidad) => {
    let pos = Cart.findIndex((i) => i.id === item.id);
    console.log(Cart[pos].cantidad);
    if (Cart[pos].cantidad !== 0) {
      Cart[pos].cantidad = Cart[pos].cantidad - cantidad;
      setCart([...Cart]);
    } else {
      removeItem(item.id);
    }
  };
  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      let pos = Cart.findIndex((i) => i.id === item.id);
      Cart[pos].cantidad += cantidad;
      setCart([...Cart]);
    } else {
      setCart([...Cart, { ...item, cantidad: cantidad }]);
    }
  };

  const removeItem = (itemId) => {
    const items = Cart.filter((item) => item.id !== itemId);
    setCart([...items]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return Cart.some((item) => item.id === itemId);
  };

  const cartTotal = () => {
    return Cart.reduce((accum, item) => (accum += item.cantidad), 0);
  };

  const cartSum = () => {
    return Cart.reduce(
      (accum, item) => (accum += item.cantidad * item.price),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ Cart, addItem, removeItem, clear, cartSum, cartTotal, restItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
