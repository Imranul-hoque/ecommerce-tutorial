import { Product, products } from "@/constants";
import { Playfair_Display } from "next/font/google";
import React from "react";
import ProductItem from "../../components/product-item";

const font = Playfair_Display({ weight : ["400","600"], subsets : ["cyrillic"] })


const ProductList = () => {
    return (
      <div className="w-full h-auto py-10 max-w-6xl mx-auto">
        <div className="w-full px-10 lg:px-0">
          <div className="w-full flex flex-col space-y-8">
            <p
              className={`text-black w-full text-center ${font.className} text-5xl font-bold`}
            >
              Browse All Products
            </p>
            <div className="pt-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product: Product, index: number) => (
                <ProductItem
                  key={index}
                  image={product.image}
                  title={product.title}
                  salePrice={product.salePrice}
                  originalPrice={product.originalPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductList;
