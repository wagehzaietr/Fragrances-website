import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../../Context/CartContext";
import { useRef } from "react";

const Modal = ({ setSelectedProduct, selectedProduct, addToCart }) => {
  const { info, price, image, rating } = selectedProduct;
  const { cart, setCart } = useContext(CartContext);
  const starArray = Array.from({ length: rating }, (_, index) => (
    <AiFillStar className="star" key={index} size={25} color="#ffd700" />
  ));
  if (!selectedProduct) {
    return null;
  }

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSelectedProduct(null);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <ModalWrapper>
        <Container ref={modalRef}>
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
            <div className="title">
              <h1>{info}</h1>
            </div>
            <div className="rating">
              <span>{starArray}</span>
            </div>

            <div className="price-info">
              <h1>{price}</h1>
            </div>
            <div className="add-btn">
              {cart.includes(selectedProduct) ? (
                <button
                  onClick={() =>
                    setCart(cart.filter((item) => item !== selectedProduct))
                  }
                >
                  remove cart
                </button>
              ) : (
                <button
                  text="Add to cart"
                  onClick={() => addToCart(selectedProduct)}
                >
                  add to cart
                </button>
              )}
            </div>
          </div>
          <AiOutlineClose
            onClick={ () => setSelectedProduct(null)}
            size={25}
            color="#fff"
            className="close"
          />
        </Container>
      </ModalWrapper>
    </>
  );
};

//styles
const ModalWrapper = styled.div`
  position: absolute;
  z-index: 999;
  background-color: #262626;
  width: 62%;
  left: 20%;
  height: 60%;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 70%;
    height: 65%;
    left: 15%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;

    @media screen and (max-width: 768px) {
      margin: 0.4rem;
    }
  }
`;

const Container = styled.div`
  width: 96%;
  background-color: #262626;
  height: 96%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 70%;
    height: 70%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .left {
    flex: 1;
    background-color: #0f0f0f;
    padding: 2rem;
    img {
      width: 100%;
      object-fit: contain;

      @media screen and (max-width: 768px) {
        transform: scale(1.2);
      }
    }
  }

  .right {
    flex: 1;
    color: #fff;
    height: 90%;
    margin-left: 1.2rem;
    padding: 2rem;
    font-size: 1.3rem;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      margin-left: 0;
    }

    .title {
      border-bottom: 1px solid #79797984;

      h1 {
        margin-bottom: 1rem;
        color: #b3b3b3ca;
        font-weight: 600;
      }
    }
    .rating {
      margin-top: 1rem;
      border-bottom: 1px solid #79797984;

      span {
        display: flex;
        margin-bottom: 1rem;

        @media screen and (max-width: 768px) {
          display: flex;
          justify-content: center;
        }
      }
    }
    .item-info {
      margin-top: 1rem;
      border-bottom: 1px solid #79797984;

      h1 {
        margin-bottom: 0.5rem;
      }
    }
    .price-info {
      margin-top: 1rem;
      border-bottom: 1px solid #79797984;

      h1 {
        margin-bottom: 1rem;
      }
    }
    .add-btn {
      color: #f3f3f3;
      padding: 0.8rem 1.2rem;
      border-radius: 50px;
      width: 50%;
      margin: 0 auto;
      text-transform: capitalize;
      font-size: 1.2rem;
      transition: all 0.2s ease-in-out;
      background-color: ${({ theme }) => theme.colors.btn_color};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
      transition: all 0.2s ease-in-out;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin-top: 2rem;
        padding: 0.5rem 1rem;
      }
    }
  }
`;

export default Modal;
