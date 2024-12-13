import React from "react";
import AboutBanner from "./components/about-banner";
import Discount from "./components/discount";
import Uniqueness from "../components/uniqueness";
import Category from "../components/category";

const AboutPage = () => {
    return (
        <div className="flex flex-col">
            <AboutBanner />
            <Discount />
            <Uniqueness />
            <Category />
      </div>
  );
};

export default AboutPage;
