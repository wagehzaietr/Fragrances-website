import styled from "styled-components";
import React, { useState } from "react";
import { motion } from "framer-motion";
import sign from "../../assets/Images/sign.png";
import BorderStyle from "../BorderStyle";
import leftcmsbanner1 from "../../assets/Images/about-cms-1.png";
import leftcmsbanner2 from "../../assets/Images/about-cms-2.png";

const about = () => {
  const MemoizedBorderStyle = React.memo(BorderStyle);
  const [readmore, setReadmore] = useState(false);
  return (
    <SectionAbout id="about">
      <WrapperAbout>
        <motion.div
          className="about-images"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <MemoizedBorderStyle
            image1={leftcmsbanner1}
            image2={leftcmsbanner2}
          />
        </motion.div>
        <div className="about-info">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Our Little Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            ratione placeat accusantium eum magnam animi enim, hic facere modi
            perspiciatis Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatum, distinctio?...
            {readmore &&
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsam ut ullam aspernatur placeat a consectetur exercitationem illo nesciunt tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequ"}
          </motion.p>
          <motion.button
            className="btn"
            onClick={() => setReadmore(!readmore)}
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.3, }}
          >
            read more
          </motion.button>
          <motion.div className="sign">
            <img src={sign} alt="" />
          </motion.div>
        </div>
      </WrapperAbout>
    </SectionAbout>
  );
};

//styles
export const SectionAbout = styled.div`
  width: 100%;
  background-color: #0f0f0f;
`;

export const WrapperAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 90%;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
  }

  .neon-border {
    position: relative;
    width: 460px;
    height: 650px;
    border: 3px solid #0353ff;
    margin-top: 8rem;
    margin-inline: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px #0353ff;

    @media screen and (max-width: 768px) {
      width: 230px;
      height: 300px;
      left: -1.2rem;
    }
  }

  .about-info {
    color: #fff;
    flex: 1;
    padding-left: 4rem;

    @media screen and (max-width: 768px) {
      padding: 0;
      text-align: center;
      margin-top: 6rem;
    }

    .btn {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      background-color: ${({ theme }) => theme.colors.btn_color};
      padding: 11px 30px;
      margin-top: 0;
      text-align: center;
      letter-spacing: 0.7px;
      text-transform: capitalize;
      border-radius: 30px;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #171717;
      }
    }

    .sign {
      min-height: 90px;
      background-repeat: no-repeat;
      display: flex;
      justify-content: flex-end;
      margin-top: 4rem;
      margin-right: 5rem;
      @media screen and (max-width: 768px) {
        margin-right: 0;
        margin-top: 4rem;
        justify-content: center;
      }
    }

    h1 {
      font-family: "Playball", cursive;
      font-size: 60px;
      line-height: 52px;
      margin-bottom: 2rem;
      position: relative;
      @media screen and (max-width: 768px) {
        font-size: 45px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 12.4%;
        height: 3px;
        top: -25px;
        left: 0.5rem;
        background-color: #d37541;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        @media screen and (max-width: 768px) {
          top: -25px;
          left: 8.8rem;
        }
      }
      &:hover::before {
        width: 16%;
      }
    }
  }

  p {
    font-size: 1.3rem;
    line-height: 30px;
    color: #888888;
    margin-bottom: 40px;
    letter-spacing: 0.7px;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }

  .about-images {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1400px) {
      margin-left: 4rem;
    }

    .image1 {
      left: -8rem;
      top: -7rem;
      position: absolute;
      @media screen and (max-width: 768px) {
        width: 80%;
        height: 80%;
        left: -3rem;
        top: -4rem;
      }
    }
    .image2 {
      right: -4rem;
      bottom: -4rem;
      position: absolute;
      @media screen and (max-width: 768px) {
        width: 80%;
        height: 80%;
        right: -2rem;
        bottom: -2rem;
      }
    }
  }
`;

export default about;
