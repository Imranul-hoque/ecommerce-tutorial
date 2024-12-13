import React from "react";
import HeroSection from "./components/hero-section";
import Banner from "./components/banner";
import Category from "./components/category";
import FeatureProduct from "./components/feature-product";
import Uniqueness from "./components/uniqueness";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Banner />
      <Category />
      <FeatureProduct />
      <Uniqueness />
    </div>
  )
};

export default Home;
