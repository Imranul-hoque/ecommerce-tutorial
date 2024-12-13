import { categories, Category as CategoryType } from "@/constants";
import { Playfair_Display } from "next/font/google";
import React from "react";
import CategoryItem from "./category-item";

const font = Playfair_Display({ weight : ["400","600"], subsets : ["cyrillic"] })


const Category = () => {
  return (
    <div className="w-full h-auto py-14 max-w-6xl mx-auto px-10 lg:px-0">
      <div className={"flex flex-col space-y-5"}>
        <p
          className={`${font.className} text-5xl font-bold text-black w-full text-center`}
        >
          Choose your category
        </p>
        <p className={`${font.className} w-full text-center text-lg font-[300] text-muted-foreground`}>Select your product from our category options</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {
            categories.map((category: CategoryType, index: number) => (
              <CategoryItem
                key={index}
                image={category.image}
                title={category.title}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Category;
