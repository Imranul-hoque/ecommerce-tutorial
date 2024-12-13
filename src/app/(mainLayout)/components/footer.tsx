import { Route, routes } from "@/constants";
import Logo from "./logo";
import NavbarItem from "./nav-item";

const Footer = () => {
  return (
    <div className="w-full bg-black mt-4 text-white px-10 h-20 flex items-center justify-start">
      <div className="w-full flex items-center justify-between">
        <Logo />
        <div>
          <p className="text-white hidden lg:block">
            All right reserved &copy; Codewithimran
          </p>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          {routes.map((route: Route, index: number) => (
            <NavbarItem isFooter key={index} label={route.label} href={route.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
