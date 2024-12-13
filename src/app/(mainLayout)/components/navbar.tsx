import { Input } from "@/components/ui/input";
import { Route, routes } from "@/constants";
import { Search, ShoppingBasket, User2 } from "lucide-react";
import Logo from "./logo";
import NavbarItem from "./nav-item";
import MobileMenu  from "./mobile-menu";

const Navbar = () => {
  return (
    <div className="z-50 shadow-md bg-pink-200 fixed top-0 left-0 right-0 w-full h-20 px-10 flex items-center justify-start">
      <div className="w-full flex items-center justify-between">
        <Logo />
        <MobileMenu />
        <div className="hidden  lg:flex items-center gap-x-3">
          {routes.map((route: Route, index: number) => (
            <NavbarItem key={index} label={route.label} href={route.href} />
          ))}
        </div>

        <div className="flex items-center gap-x-4">
          <div className="relative flex items-center gap-x-2">
            <Input
              placeholder="Search"
              className="focus-visible:ring-0 focus-visible:outline-none "
            />
            <Search className="absolute top-3 right-0 size-4 text-muted-foreground" />
          </div>
          <div className="mt-2 w-8 h-8 border-[1px] border-gray-500 rounded-full p-1 flex items-center justify-center">
            <User2 className="size-4 text-muted-foreground" />
          </div>
          <div className={"relative"}>
            <div className="relative mt-2 w-8 h-8 border-[1px] border-gray-500 rounded-full p-1 flex items-center justify-center">
              <ShoppingBasket className="size-4 text-muted-foreground" />
            </div>
            <span className="absolute bottom-6 left-4 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs p-1">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
