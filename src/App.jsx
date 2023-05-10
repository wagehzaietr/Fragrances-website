import React, { useEffect, useState } from "react";
import {  Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, NavBar, Footer } from "./Componets";
import BackToTop from "./Componets/BackToTop";
import GlobalStyle from "./Styles/GlobalStyles.js";
import Cart from "./Pages/Cart";

const theme = {
  colors: {
    text_color: "#d9ae6d",
    btn_color: "#d37541",
    bg_color: "#0f0f0f",
    gradient: "linear-gradient(45deg, #d9ae6d, #f1f0f0)",
  },
};

const App = () => {
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0.3 * window.innerHeight) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      {show && <BackToTop />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
