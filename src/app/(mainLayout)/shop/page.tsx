import React from "react";
import ProductBanner from "./components/product-banner";
import ProductList from "./components/product-list";


const ShopPage = () => {
    return (
        <div className="flex flex-col">
            <ProductBanner />
            <ProductList />
      </div>
  )
};

export default ShopPage;
