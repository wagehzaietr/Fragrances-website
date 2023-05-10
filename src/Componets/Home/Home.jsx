import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCarusal from "./HomeCarusal";
import MenSection from "./about";
import Popular from "./Popular";
import Blog from "./Blog";
import BrandCarusal from "./BrandCarusal";

const Home = () => {
  return (
    <>
      <HomeCarusal />
      <MenSection />
      <Popular />
      <Blog />
      <BrandCarusal/>
    </>
  );
};

export default Home;
