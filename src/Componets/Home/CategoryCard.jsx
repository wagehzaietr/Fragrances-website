import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const CategoryCard = ({ carditem, handleProductClick }) => {
  const { price, image, info, rating } = carditem;
  const starArray = Array.from({ length: rating }, (_, index) => (
    <AiFillStar className="star" key={index} size={25} color="#ffd700" />
  ));
  return (
      <CardWrapper onClick={() => handleProductClick(carditem)}>
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="image-content">
            <LazyLoadImage src={image} alt="category" />
          </div>
          <div className="info">
            <h1>{info}</h1>
            <div className="rating">
              <span>{price}</span>
              <motion.span className="stars">{starArray}</motion.span>
            </div>
          </div>
        </motion.div>
      </CardWrapper>
  );
};

//styles
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  cursor: pointer;

  .image-content {
    position: relative;
  }

  .card {
    width: 340px;
    background-color: #0f0f0f;
    border-radius: 10px;
    padding: 1.3rem;

    @media screen and (max-width: 768px) {
      width: 240px;
      padding: 0;
      margin: 0;
    }

    .info {
      padding: 1.1rem;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      border-top: 1px solid #2e2e2e;

      .rating {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .stars {
          display: flex;
          visibility: hidden;
          transition: all 0.5s ease-in-out;
        }
      }
      &:hover .stars {
        visibility: visible;
      }
    }

    h1 {
      color: #d4d4d4;
    }

    span {
      color: #bb693b;
      margin-top: 1rem;
      font-weight: bold;
      font-size: large;
    }

    img {
      object-fit: cover;
      padding: 1.8rem;
      width: 100%;
      @media screen and (max-width: 768px) {
        padding: 2rem;
      }
    }
  }
`;

export default CategoryCard;
