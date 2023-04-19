import { useState} from 'react';

import CartContext from './cart-context';


let  items= [{
id:1,
title: 'Colors',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
},
{
id:2,
title: 'Black and white Colors',
price: 50,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
}]


const CartProvider = (props) => {
  const [cart,setCart] = useState(items)
  const addItemToCartHandler = (item)=>{
    setCart((pre)=>[item,...pre])
  }
  const removeItemFromCartHandler = (id) =>{
    setCart(cart.filter((itm)=>itm.id!==id))
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
