import React, { useContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CardData } from "../../Data/ProductData";
import CategoryCard from "./CategoryCard";
import CategoryFilter from "./CategoryFilter";
import Modal from "../Modal/Modal";
import Slider from "react-slick";
import { Popular_settings } from "../../Slidersettings/SliderSettings";
import { CartContext } from "../../Context/CartContext";
import { Link, useParams } from "react-router-dom";

const Popular = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterByGender, setFilterByGender] = useState(null);
  const [carditem] = useState(CardData);
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const filterByCategory = (category) => {
    setFilterByGender(category);
  };

  const filteredData = filterByGender
    ? carditem.filter((item) => item.category === filterByGender)
    : carditem;

  const handleProductClick = (carditem) => {
    setSelectedProduct(carditem);
  };

  return (
    <Section id="product">
      <Container>
        <div className="text-info">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Popular Products
          </motion.h1>
          <CategoryFilter
            setFilterByGender={setFilterByGender}
            filterByCategory={filterByCategory}
          />
        </div>
      </Container>
      <PopularProduct>
        <StyledSlider {...Popular_settings}>
          {filteredData.map((carditem) => {
            return (
              <CategoryCard
                carditem={carditem}
                key={carditem.id}
                handleProductClick={handleProductClick}
              />
            );
          })}
        </StyledSlider>
        {selectedProduct && (
          <Modal
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            addToCart={addToCart}
          />
        )}
      </PopularProduct>
    </Section>
  );
};

//styles
const Section = styled.section`
  background: #000;
  width: 100%;
  margin: 0 auto;
`;

const StyledSlider = styled(Slider)`
  /* Example styles for the slide images */
  .slick-slide img {
    object-fit: contain;
    padding: 1rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    transform: scale(2);
    margin-top: 1rem;
    visibility: hidden;
  }

  .slick-prev {
    left: 16px;
  }

  .slick-next {
    right: 16px;

    &:hover {
      visibility: visible;
    }
  }

  :hover .slick-next,
  :hover .slick-prev {
    visibility: visible;
  }

  @media screen and (max-width: 768px) {
    .slick-prev {
      width: 12%;
      transform: scale(1.3);
      left: -15px;
    }

    .slick-next {
      width: 12%;
      transform: scale(1.3);
      right: -15px;
    }
  }
`;

const Container = styled.section`
  padding-top: 7rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding-top: 4rem;
  }

  .text-info {
    text-align: center;

    h1 {
      color: #fff;
      font-family: "Playball", cursive;
      font-size: 50px;
      position: relative;

      @media screen and (max-width: 768px) {
        width: 100%;
        font-size: 35px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 5%;
        height: 3px;
        top: -1rem;
        left: 0;
        right: 0;
        margin: auto;
        background-color: #d37541;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        @media screen and (max-width: 768px) {
          width: 12%;
          left: 1rem;
        }
      }

      &:hover::before {
        width: 7%;
      }
    }
  }
`;

const PopularProduct = styled.div`
  display: grid;
  height: calc(100vh - 6rem);
  margin-top: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-inline: 8rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0;
    height: calc(100vh - 16rem);
  }
`;

export default Popular;
