import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const SingleProduct = ({ fragrance }) => {
  const { image } = fragrance;
  return (
    <div>
      <Wrapper>
        <motion.img
          src={image}
          alt="fragrances-image"
          height="100%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </Wrapper>
    </div>
  );
};

//styles

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default SingleProduct;
