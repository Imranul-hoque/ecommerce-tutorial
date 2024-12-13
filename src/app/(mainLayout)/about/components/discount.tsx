import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Playfair_Display({ weight : ["400","600"], subsets : ["cyrillic"] })


const Discount = () => {
    return (
      <div className="w-full h-auto max-w-6xl mx-auto py-20">
        <div className="w-full px-10 lg:px-0">
          <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between justify-center space-y-5 lg:space-y-0">
            <div className="w-full flex items-center justify-center pt-10">
              <Image
                src={"/images/banners/about-banner.png"}
                alt="Banner"
                width={500}
                height={350}
                className="object-center bg-center"
              />
            </div>
            <div className="w-full flex flex-col space-y-6 pt-10 px-6">
              <p
                className={`${font.className} text-3xl font-semibold text-black`}
              >
                Welcome to Codewithimran
              </p>
              <p
                className={`${font.className} text-lg font-[300] text-muted-foreground`}
              >
                Provide best quality of Furniture and we always focus on
                quality, technology and try to make our customer happy
              </p>
              <p
                className={`${font.className} text-sm font-[300] text-muted-foreground`}
              >
                Furniture best dolor sit amet, consectetur adipiscing elit. Duis
                lectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae
                cursus phar purus. Ut enim sed id consectetur velit ullamcorper
                a. Tellus, tempus erdiet dui amet bibendum amet, vestibulum. Sed
                morbi viverra sit tempor tristique sit. Donec vitae lacu
              </p>
              <p
                className={`${font.className} text-sm font-[300] text-muted-foreground`}
              >
                Furniture best dolor sit amet, consectetur adipiscing elit. Duis
                lectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae
                cursus phar purus. Ut enim sed id consectetur velit ullamcorper
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Discount;
