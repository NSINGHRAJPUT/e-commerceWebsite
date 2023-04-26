import React from 'react'

const CartContext = React.createContext({
    item:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    token:'',
    islogged:false,
    logIn:(token)=>{},
    logOut:()=>{}
})

export default CartContext;