import { Category } from "@/constants";
import { Playfair_Display } from "next/font/google";
import React from "react";

const font = Playfair_Display({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
});

const CategoryItem = ({ image : Icon, title }:Category) => {
  return (
    <div className="runded-md hover:shadow-xl cursor-pointer w-[150px] bg-[#F5F4F4] h-[150px]">
      <div className="p-4 w-full h-full gap-y-3 flex items-center justify-center flex-col">
        <Icon className="size-10 text-muted-foreground" />
        <p className={`${font.className} text-sm font-semibold`}>{title}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
