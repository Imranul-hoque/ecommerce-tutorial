import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const font = Playfair_Display({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
});

const Banner = () => {
  return (
    <div className="w-full h-auto lg:h-[80vh] flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-center lg:justify-between">
      <div className="w-full h-full bg-[url('/images/banners/image-01.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="py-14 lg:py-0 h-full flex flex-col space-y-4 justify-center px-10">
          <p
            className={`${font.className} text-xl font-semibold text-gray-200`}
          >
            NEW COLLECTIONS
          </p>
          <p className={`${font.className} text-5xl font-bold text-gray-300`}>
            Accent Leisure Chairs
          </p>
          <p
            className={`${font.className} text-lg font-[300] text-muted-foreground`}
          >
            Lorem ipsum dolor sit amet, consectetur <br /> scelerisque a
            tincidunt urna quam
          </p>
          <Button
            className="bg-white w-[150px] px-6 py-5 rounded-none"
            variant={"ghost"}
          >
            Shop now
          </Button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center py-10">
        <div className="text-center flex relative flex-col space-y-4">
          <p className={`${font.className} text-xl text-black`}>
            UP TO <span className="underline text-brownColor">20% OFF</span>{" "}
          </p>
          <p className={`${font.className} text-5xl font-bold text-black`}>
            Modern & Minimal
          </p>
          <p
            className={`${font.className} text-sm font-semibold text-muted-foreground`}
          >
            Don’t miss avail the saving opportunity
          </p>
          <div className="absolute top-[20%]">
            <Image
              src={"/images/banners/image-02.png"}
              alt={"Banner2"}
              width={700}
              height={400}
              className="lg:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
