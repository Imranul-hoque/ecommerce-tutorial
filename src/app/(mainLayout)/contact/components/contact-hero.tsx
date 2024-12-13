import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const font = Playfair_Display({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
});

const ContactHero = () => {
  return (
    <div className=" bg-[#EFF0F4] w-full h-auto lg:h-[70vh] lg:py-0">
      <div className="w-full max-w-6xl mx-auto px-10 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0">
          <div className=" text-center lg:text-start flex flex-col space-y-4">
            <p className={`${font.className} font-bold text-6xl`}>Contact</p>
            <p
              className={`${font.className} text-lg font-[300] text-muted-foreground`}
            >
              orem ipsum dolor sit amet, consectetur adipiscing elit quam
              scelerisque a tincidunt urna. Nisl, quam orci malesuada
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src={"/images/banner.png"}
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

export default ContactHero;
