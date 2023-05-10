import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Logo from "../../assets/Images/logo1.png";
import { ImMenu3 } from "react-icons/im";
import { motion } from "framer-motion";
import { MobileNav } from "../../Data/MobileNavData";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const NavBar = () => {
  const [show, setShow] = useState(null);

  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };

  const { cart } = useContext(CartContext);

  return (
    <Header>
      <Nav>
        <div className="left-menu">
          <Link to="/">
            <img src={Logo} alt="" width="75px" />
          </Link>
        </div>
        <Menu>
          <ul>
            <Link to="/">
              <li> Home</li>
            </Link>
            <a href="#about">
              <li> About</li>
            </a>
            <a href="#product">
              <li>Product</li>
            </a>
            <a href="#blog">
              <li> Blog</li>
            </a>
          </ul>
        </Menu>
        <Icons>
          <div className="mobile-menu" onClick={handleShow}>
            <ImMenu3 size={26} color="#ffffff" />
          </div>
          <AiOutlineHeart size={25} color="#ffffff" />
          <div className="bag-icon">
            <Link to="/cart">
              <BsBag size={25} color="#ffffff" />
            </Link>
            <div className="bag-count">{cart.length}</div>
          </div>
          <AiOutlineSearch size={25} color="#ffffff" />
        </Icons>
      </Nav>
      {show && (
        <Mobilewrapper
          initial={{ opacity: 0, height: 0 }}
          animate={
            show ? { opacity: 1, height: "19%" } : { opacity: 0, height: 0 }
          }
          exit={{ opacity: 0, height: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          {MobileNav.map((link, index) => {
            return (
              <motion.li
                initial={{ opacity: 0, x: 30 }}
                animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.2, delay: 0.2 * index }}
                key={index}
                exit={{ opacity: 0, x: 30 }}
              >
                <motion.a href={link.url}>{link.name}</motion.a>
              </motion.li>
            );
          })}
        </Mobilewrapper>
      )}
    </Header>
  );
};

//styles

const Header = styled.div`
  width: 100%;
  background-color: #000000;
  border-bottom: 1px solid #262626;
`;

const Mobilewrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  position: absolute;
  top: 8.4rem;
  left: 0;
  z-index: 999;
  width: 100%;
  cursor: pointer;

  background-color: #262626;

  li {
    margin-top: 0.6rem;
    color: #888888;
  }
`;

const Nav = styled.nav`
  display: flex;
  padding-top: 1.3rem;
  padding-bottom: 0.7rem;
  align-items: center;
  justify-content: center;
  height: auto;
  z-index: 99;
  background-color: #000000;
  color: white;
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .left-menu {
    flex: 1;
    display: flex;

    img {
      object-fit: cover;
      margin-left: 0.6rem;
    }
  }

  .menu-icon {
    padding: 7px;
    border-radius: 10px;
    border: 1px solid #fff;
  }
`;

const Menu = styled.nav`
  flex: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: center;
  }
`;

const Icons = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-top: 0.6rem;
    left: 8rem;
  }

  .mobile-menu {
    display: none;
    z-index: 999;
    @media screen and (max-width: 768px) {
      display: block;
      left: -15.5rem;
      position: absolute;
    }
  }

  .bag-icon {
    position: relative;

    .bag-count {
      background-color: ${({ theme }) => theme.colors.btn_color};
      text-align: center;
      border-radius: 50%;
      width: 19px;
      height: 19px;
      font-size: 13px;
      position: absolute;
      left: -0.5rem;
      font-weight: 700;
      color: #fff;
      top: 0;
    }
  }
`;

export default NavBar;
