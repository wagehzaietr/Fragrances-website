import React from "react";
import image from "../assets/Images/top-button.png";
import styled from "styled-components";

const BackToTop = () => {
  return (
    <BacktoTop>
      <a href="#">
        <img src={image} alt="back to top" />
      </a>
    </BacktoTop>
  );
};

//styles

const BacktoTop = styled.div`
  bottom: 20px;
  cursor: pointer;
  position: fixed;
  right: 20px;
  width: 50px;
  height: 65px;
  text-align: center;
  z-index: 99;
  font-size: 0;

  @media screen and (max-width: 768px) {
    height: 55px;
    width: 40px;
  }
`;

export default BackToTop;
