import React, { useState } from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillSendFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import payimg from "../../assets/Images/paymethod.png";

const footerInfo = [
  {
    header: "My Account",
    items: [
      "My Account",
      "Order History",
      "Wish List",
      "Newsletter",
      "Returns",
    ],
  },
  {
    header: "Information",
    items: [
      "About Us",
      "Delivery Information",
      "Privacy Policy",
      "Terms & Conditions",
      "Site Map",
    ],
  },
  {
    header: "Store Information",
    items: [
      {
        icon: <IoLocationSharp color="#d37541" size={20} />,
        text: "Syria Almahiry",
      },
      {
        icon: <BsFillTelephoneFill color="#d37541" size={20} />,
        text: "123-456-789",
      },
      { icon: <FaFax color="#d37541" size={20} />, text: "123456" },
      {
        icon: <AiOutlineMail color="#d37541" size={20} />,
        text: "sales@yourcompany.com",
      },
    ],
  },
];

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleHeaderClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <div className="row1">
          {["free shipping", "customer service", "payment options"].map(
            (title) => (
              <div className="col1" key={title}>
                <h1>{title}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.sit
                  amet consectetur adipisicing
                </p>
              </div>
            )
          )}
        </div>
      </FooterContainer>
      <div className="row2">
        <div className="col2">
          <h1 className="header">Our Testimonial </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            mollitia laborum animi ea maiores voluptate.
          </p>
          <h1>
            John Wolfe <span> (Client)</span>
          </h1>
        </div>
        {footerInfo.map(({ header, items }) => (
          <div className="col2" key={header}>
            <h1 className="header">{header}</h1>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <div className="icons">
                      {item.icon}
                      <ul>{item.text}</ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <MobileFooter>
        <ul>
          {footerInfo.map(({ header, items }, index) => {
            const isActive = activeIndex === index;
            return (
              <React.Fragment key={header}>
                <li onClick={() => handleHeaderClick(index)}>
                  <h1 className="headermobile">{header}</h1>
                  <IoMdArrowDropdown
                    size={20}
                    color="#fff"
                    style={{ transform: isActive ? "rotate(180deg)" : "" }}
                  />
                </li>
                <motion.ul
                  className={`mobile-items ${isActive ? "active" : ""}`}
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={isActive ? { opacity: 1, maxHeight: "500px" } : {}}
                  transition={{ duration: 0.4 }}
                  key={header}
                >
                  {items.map((item, index) => (
                    <motion.li
                      key={index}
                      layout
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7 * index,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <div className="icons">
                          {item.icon}
                          <ul>{item.text}</ul>
                        </div>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </React.Fragment>
            );
          })}
        </ul>
      </MobileFooter>
      <div className="row3">
        <div className="col3">
          <div>
            <img src={payimg} alt="" />
          </div>
        </div>
        <div className="col3">
          <p>Almahiry© 2022 All Rights Reserved</p>
        </div>
        <div className="col3">
          <h1>Subscribe</h1>
          <div className="search">
            <input type="text" placeholder="Enter your email address" />
            <BsFillSendFill color="#d37541" size={16} className="send" />
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

//styles
const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg_color};
  height: 100%;
  @media screen and (max-width: 768px) {
    height: 100vh;
  }

  .header {
    color: #fff;
    font: 500 16px/26px "Poppins", sans-serif;
    text-transform: capitalize !important;
    margin: 0 0 20px 0;
    cursor: pointer;
    letter-spacing: 0.7px;
  }

  .row3 {
    display: flex;
    width: 85%;
    margin: 0 auto;
    padding-top: 1rem;
    gap: 1.7rem;
    padding-top: 20px;
    padding-bottom: 20px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }

    .col3 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 10rem;
      }

      @media screen and (max-width: 768px) {
        display: block;

        img {
          margin-left: 2rem;
        }
      }

      h1 {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.7px;
        color: #ffffff;
        display: inline-block;
        padding-top: 8px;
        line-height: 26px;
        text-transform: capitalize;
        margin-right: 10px;

        @media screen and (max-width: 768px) {
          margin-bottom: 1rem;
          margin-top: 1rem;
        }
      }

      .search {
        position: relative;

        .send {
          position: absolute;
          top: 0;
          right: 0;
          margin: 1rem;
        }

        input {
          border: 0px;
          min-width: 260px;
          padding: 10px 40px 10px 10px;
          width: 100%;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 0.6px;
          height: 42px;
          color: #b0b0b0;
          text-transform: capitalize;
          background: #131313;
        }
      }

      p {
        font-size: 13px;
        text-align: center;
        margin: 0;
        padding: 10px 0 10px;
        letter-spacing: 0.7px;
        margin-top: -5px;
        color: #888888;
        margin-right: 7rem;

        @media screen and (max-width: 768px) {
          margin: 0;
        }
      }
    }
  }

  .row2 {
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    width: 78%;
    margin: 0 auto;
    padding-top: 1rem;
    justify-content: center;
    gap: 1.7rem;
    border-bottom: 1px solid #454545;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      display: none;
    }

    .col2 {
      flex: 1;
      color: white;
      padding: 1rem;

      span {
        background-color: ${({ theme }) => theme.colors.btn_color};
        -webkit-background-clip: text;
        color: transparent;
      }

      p {
        margin-bottom: 0.3rem;
        font-weight: 400;
        line-height: 30px;
        color: #888888;
        letter-spacing: 0.7px;
        font-size: 13px;
      }

      .icons {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .icon {
          color: ${({ theme }) => theme.colors.btn_color};
          font-size: 21px;
        }
      }

      li {
        margin-bottom: 0.3rem;
        font-weight: 400;
        line-height: 30px;
        color: #888888;
        letter-spacing: 0.7px;
        font-size: 13px;
      }
    }
  }
`;
const MobileFooter = styled.div`
  .mobile-items {
    padding: 0;
    margin: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    li {
      font-weight: 400;
      line-height: 30px;
      color: #888888;
      letter-spacing: 0.7px;
      font-size: 13px;
    }
    .icons {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }

  display: none;
  padding: 2rem;
  flex-direction: column;
  h1 {
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    letter-spacing: 0.5px;
    position: relative;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 1.7rem;
  padding-top: 40px;
  padding-bottom: 40px;

  .row1 {
    display: flex;
    width: 85%;
    margin: 0 auto;
    justify-content: center;
    gap: 1.7rem;
    border-bottom: 1px solid #454545;
    @media screen and (max-width: 768px) {
      padding: 0;
      flex-direction: column;
      text-align: center;
    }
  }

  .col1 {
    flex: 1;
    color: white;
    padding: 3rem;
    h1 {
      text-transform: capitalize;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      letter-spacing: 0.5px;
      position: relative;
      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }

      &::before {
        content: "";
        position: absolute;
        width: 15%;
        height: 3px;
        top: -22px;
        left: 0.2rem;
        background-color: #454545;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        @media screen and (max-width: 768px) {
          top: -25px;
          left: 6.2rem;
        }
      }
      &:hover::before {
        width: 19%;
      }
    }
  }

  p {
    font-size: 13px;
    letter-spacing: 0.8px;
    font-weight: 400;
    line-height: 26px;
    color: #808080;
    margin-top: 15px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export default Footer;
