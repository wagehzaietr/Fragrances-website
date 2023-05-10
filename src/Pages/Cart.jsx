import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartProduct from "../Componets/Home/CartProduct";
import { motion } from "framer-motion";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <CartContent
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {cart.length > 0 ? (
        cart.map((Product) => {
          return (
            <CartProduct
              cart={cart}
              setCart={setCart}
              Product={Product}
              key={Product.id}
            />
          );
        })
      ) : (
        <h2>Cart is Empty</h2>
      )}
      {cart.length > 0 && (
        <div className="btn">
          <button className="btn btn-primary">
            <Link to="/">Continue Shopping</Link>
          </button>
        </div>
      )}
    </CartContent>
  );
};

//styles
const CartContent = styled(motion.div)`
  display: flex;
  background-color: #000;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem;
  overflow: hidden;

  .btn {
    width: 100%;
  }

  button {
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 25px;
  }

  h2 {
    color: #fff;
    font-size: 2rem;
  }
`;

export default Cart;
