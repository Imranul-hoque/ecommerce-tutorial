import { IconType } from "react-icons";
import { FaChair } from "react-icons/fa6";
import { LuBed } from "react-icons/lu";
import { LuSofa } from "react-icons/lu";
import { MdTableBar } from "react-icons/md";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { PiChairLight } from "react-icons/pi";

export type Route = {
  label: string;
  href: string;
  isFooter?: boolean;
};

export type Category = {
  image: IconType;
  title: string;
};

export type Product = {
  image: string;
  title: string;
  originalPrice: number;
  salePrice: number;
};

export const categories: Category[] = [
  {
    image: FaChair,
    title: "Chair",
  },
  {
    image: LuBed,
    title: "Bed",
  },
  {
    image: LuSofa,
    title: "Sofa",
  },
  {
    image: MdTableBar,
    title: "Table",
  },
  {
    image: RiArchiveDrawerLine,
    title: "Side Drawer",
  },
  {
    image: PiChairLight,
    title: "Dining Chair",
  },
];

export const routes: Route[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "About",
    href: "/about",
  },
];


export const products: Product[] = [
  {
    image: "/images/products/image-01.jpg",
    title: "Accent Leisure Chairs",
    originalPrice: 102.5,
    salePrice: 65.35,
  },
  {
    image: "/images/products/image-02.jpg",
    title: "Wooden Showpice Table",
    originalPrice: 68.0,
    salePrice: 32.65,
  },
  {
    image: "/images/products/image-03.jpg",
    title: "Blockers Egg Chair",
    originalPrice: 80.5,
    salePrice: 50.35,
  },
  {
    image: "/images/products/image-04.jpg",
    title: "Wooden Tea Table",
    originalPrice: 50.0,
    salePrice: 40.2,
  },
  {
    image: "/images/products/image-05.jpg",
    title: "Wooden Showpiece Table",
    originalPrice: 80.7,
    salePrice: 55.35,
  },
  {
    image: "/images/products/image-06.jpg",
    title: "Wooden Bed",
    originalPrice: 400.5,
    salePrice: 300.0,
  },
];
