import { Product } from "@/constants";
import { ShoppingBasket } from "lucide-react";
import { EB_Garamond, Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Playfair_Display({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
});

const priceFont = EB_Garamond({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
});

const ProductItem = ({
    image,
    title,
    salePrice,
    originalPrice
}:Product) => {
    return (
      <div className="transition-all duration-500 cursor-pointer group rounded-md hover:border-none w-[95%] h-auto p-4 border-[1px] border-gray-300">
        <div className="relative flex flex-col space-y-2 w-full h-full">
          <Image
            className="transition-all duration-150  rounded-xl object-center"
            src={image}
            alt={title}
            width={350}
            height={200}
          />
          <p className={`${font.className} pt-2 text-2xl font-semibold`}>
            {title}
          </p>
          <div className="flex items-center gap-x-2">
            <p className={`${priceFont.className} text-xl font-semibold`}>
              ${salePrice} USD
            </p>
            <p
              className={`${priceFont.className} line-through text-lg text-muted-foreground font-semibold`}
            >
              ${originalPrice} USD
            </p>
          </div>
          <div className="transition-all duration-500 hidden absolute top-[70%] left-[25%] bg-gray-300 w-[150px] group-hover:flex items-center gap-x-2 px-4 py-2">
            <ShoppingBasket className="size-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Add to card</p>
          </div>
        </div>
      </div>
    );
};

export default ProductItem;
