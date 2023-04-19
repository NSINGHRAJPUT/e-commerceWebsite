import { useState} from 'react';

import CartContext from './cart-context';


let  items= []


const CartProvider = (props) => {
  const [cart,setCart] = useState(items)
  const addItemToCartHandler = (item)=>{
    setCart((pre)=>[item,...pre])
  }
  const removeItemFromCartHandler = (id) =>{
    setCart(cart.filter((item)=> item.id!== id))
  }

  const cartContext = {
    items: cart,
    totalAmount: 1,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
