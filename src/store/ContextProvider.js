import CartContext from "./cart-context";
import { useState } from "react";

const productsArr = [
    {
        id:'I1',
        key:1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id:'I2',
        key:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    }]

const CartProvider = (props) =>{
    const [arr,setArr] = useState(productsArr)

    const addHandler = (item) =>{
        setArr((pre)=>[item,...pre])
    }

    const removeHandler = (id) =>{
        setArr((pre)=>pre.filter((itm)=>itm.id!==id))
    }


    const cartContext = {
        items:arr,
        totalAmount:0,
        addItem:addHandler,
        removeItem:removeHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;