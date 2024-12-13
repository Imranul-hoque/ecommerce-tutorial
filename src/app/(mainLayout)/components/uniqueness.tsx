import { Button } from "@/components/ui/button";
import { EB_Garamond, Playfair_Display } from "next/font/google";
import Image from "next/image";

const font = Playfair_Display({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
});

const textFont = EB_Garamond({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
});

const Uniqueness = () => {
  return (
    <div className="w-full h-auto lg:h-[80vh]">
      <div className="w-full max-w-7xl h-full mx-auto px-10 lg:px-0">
        <div className="w-full h-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between justify-center space-y-4 lg:space-y-0">
          <div className="w-full h-full flex flex-col space-y-7">
            <p
              className={`${font.className} text-5xl font-semibold text-black text-center lg:text-start`}
            >
              Why We are the Best?
            </p>
            <p className="pt-3 text-sm font-semibold text-muted-foreground leading-5">
              Features that we have which Lorem ipsum dolor sit amet,
              consectetur <br /> convallis. Arcu, egestas nec scelerisque mi.
              Augue proin
            </p>
            <div className="pt-8 w-full flex flex-col space-y-4">
              <div className="w-full flex items-center gap-x-8">
                <div className="w-full flex items-start gap-x-4">
                  <div>
                    <Image
                      src={"/images/why-best/image-01.svg"}
                      alt="Shipping"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="w-full flex flex-col space-y-1">
                    <p
                      className={`${font.className} font-semibold text-2xl text-black`}
                    >
                      Free Shipping
                    </p>
                    <p
                      className={`${font.className} w-full text-sm font-semibold text-muted-foreground text-ellipsis`}
                    >
                      Buy product over $100 and get free home delivery offer
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-start gap-x-4">
                  <div>
                    <Image
                      src={"/images/why-best/image-02.svg"}
                      alt="Shipping"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="w-full flex flex-col space-y-1">
                    <p
                      className={`${font.className} font-semibold text-2xl text-black`}
                    >
                      Easy Return Policy
                    </p>
                    <p
                      className={`${font.className} text-sm w-full font-semibold text-muted-foreground`}
                    >
                      Provide 30 day easy Return policy for all of our custome
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-x-4">
                <div className="w-full flex items-start gap-x-4">
                  <div>
                    <Image
                      src={"/images/why-best/image-03.svg"}
                      alt="Shipping"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="w-full flex flex-col space-y-1">
                    <p
                      className={`${font.className} font-semibold text-2xl text-black`}
                    >
                      Secure Payment
                    </p>
                    <p
                      className={`${font.className} text-sm w-full font-semibold text-muted-foreground`}
                    >
                      We conform you that payment system are totally secure
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-start gap-x-4">
                  <div>
                    <Image
                      src={"/images/why-best/image-04.svg"}
                      alt="Shipping"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-full flex flex-col space-y-1">
                    <p
                      className={`${font.className} font-semibold text-2xl text-black`}
                    >
                      Best Quality
                    </p>
                    <p
                      className={`${font.className} text-sm w-full font-semibold text-muted-foreground`}
                    >
                      We never compromize about <br /> our quality and always
                      concern
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md h-[400px] bg-[url('/images/banner-02.png')] bg-center object-cover bg-no-repeat ">
            <div className="flex flex-col h-full items-start justify-center space-y-4 pl-20">
              <p
                className={`${textFont.className} text-white font-semibold text-xl tracking-wide`}
              >
                MEGA SALE UPTO 75%
              </p>
              <p
                className={`${font.className} text-4xl text-white font-semibold`}
              >
                Fancy Sofa set
              </p>
              <p
                className={`${font.className} text-sm font-semibold text-gray-300`}
              >
                Lorem ipsum dolor sit amet, consectetur <br />
                scelerisque a tincidunt urna quam
              </p>
              <Button className="bg-gray-300 hover:bg-gray-300 text-black hover:text-black w-[20%] px-8 py-6 rounded-none text-xs">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uniqueness;
