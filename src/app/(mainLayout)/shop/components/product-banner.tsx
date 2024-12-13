import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";


const font = Playfair_Display({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
});


const ProductBanner = () => {
    return (
      <div className=" bg-[#EFF0F4] w-full h-auto lg:h-[70vh] lg:py-0">
        <div className="w-full max-w-6xl mx-auto px-10 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0">
            <div className="pt-20 text-center lg:text-start flex flex-col space-y-4">
              <p className={`${font.className} text-xl font-[300]`}>
                Upfront Sale & 20% discount
              </p>
              <p className={`${font.className} font-bold text-6xl`}>
                Unique & Stylish Furniture
              </p>
              <p
                className={`${font.className} text-lg font-[300] text-muted-foreground`}
              >
                orem ipsum dolor sit amet, consectetur adipiscing elit quam
                scelerisque a tincidunt urna. Nisl, quam orci malesuada
              </p>
              <div className="w-full items-center justify-start lg:justify-start">
                <Button
                  variant={"ghost"}
                  className="w-[150px] bg-black shadow-md text-xs font-[300] text-white px-6 py-5 rounded-none"
                >
                  Shop now
                </Button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <Image
                src={"/images/banner-03.png"}
                alt="Banner"
                width={450}
                height={200}
                className="object-center rounde-md lg:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductBanner;
