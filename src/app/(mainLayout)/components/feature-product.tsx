import { Product, products } from "@/constants";
import { Playfair_Display } from "next/font/google";
import React from "react";
import ProductItem from "./product-item";

const font = Playfair_Display({ weight : ["400","600"], subsets : ["cyrillic"] })


const FeatureProduct = () => {
    return (
      <div
        className={
          "flex flex-col space-y-6 py-10 w-full h-auto max-w-6xl mx-auto px-10 lg:px-0"
        }
      >
        <p
          className={`${font.className} text-center w-full text-5xl font-bold text-black`}
        >
          Feature Collection
        </p>
            <p className="text-center w-full text-lg text-muted-foreground font-[300]">Most Selling and Trending Product</p>
            <div className="pt-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map((product: Product, index: number) => (
                        <ProductItem
                            key={index}
                            image={product.image}
                            title={product.title}
                            salePrice={product.salePrice}
                            originalPrice={product.originalPrice}
                        />
                    ))
                }
            </div>
      </div>
    );
};

export default FeatureProduct;
