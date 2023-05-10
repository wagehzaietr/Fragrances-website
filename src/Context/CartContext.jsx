import React, { useState } from 'react'
import { createContext } from 'react'

const CartContext = createContext()


const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])
  return (
    <CartContext.Provider value={{cart,setCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

export {CartContext}