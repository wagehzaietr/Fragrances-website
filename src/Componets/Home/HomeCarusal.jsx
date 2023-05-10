import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Fragrances } from "../../Data/ProductData";
import SingleProduct from "./SingleProduct";
import {settings} from "../../Slidersettings/SliderSettings";


const HomeCarusal = () => {
  const [Fragrance] = useState(Fragrances);
  return (
    <SliderContainer {...settings}>
        {Fragrance.map((fragrance, id) => {
          return <SingleProduct key={id} fragrance={fragrance} />;
        })}
    </SliderContainer>
  );
};

//styles
const SliderContainer = styled(Slider)`
overflow-x: hidden;
max-width: 100%;
`;
export default HomeCarusal;
