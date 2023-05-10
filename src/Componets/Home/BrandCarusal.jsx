import React from "react";
import Slider from "react-slick";
import { Brand_settings } from "../../Slidersettings/SliderSettings";
import styled from "styled-components";
import Images from "../../Data/BrandsImg";
import { motion } from "framer-motion";

const BrandCarusal = () => {
  return (
    <BrandSection>
      <Container>
        <SliderBrand {...Brand_settings}>
          {Images.map((image, index) => {
            return (
              <motion.div
                key={index}
                className="images"
              >
                <motion.img
                  src={image.img}
                  alt="brand-images"
                  transition={{ duration: .5, type: "spring", stiffness: 100 }}
                  whileHover={{ rotate: [100, -100, 0] }}
                  style={{ rotate: 0 }}
                />
              </motion.div>
            );
          })}
        </SliderBrand>
      </Container>
    </BrandSection>
  );
};

//styles

const SliderBrand = styled(Slider)`
  .slick-slide {
  }
  .slick-list {
    margin-left: 6rem;

    @media screen and (max-width: 768px) {
      margin-left: 6.5rem;
    }
  }
  .slick-track {
  }

  .slick-prev,
  .slick-next {
    transform: scale(2);
    margin-inline: -1rem;
    z-index: 1;
    transform: scale(2);
    margin-top: 1rem;
    cursor: pointer;
  }
`;

const BrandSection = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  height: calc(24vh);
`;

const Container = styled.div`
  margin: 0 auto;
  width: 83%;

  img {
    transition: 0.3s ease;
  }
`;

export default BrandCarusal;
