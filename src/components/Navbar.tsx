import { AlignJustify, CrossIcon, X } from "lucide-react";
import NavItem from "./NavItem";
import { useState } from "react";

const navItems = ["About", "Careers", "Events", "Products"];

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex relative">
      <div className="flex w-full items-center justify-between CommonPadding">
        {/* Logo */}
        <div className="flex">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            loopstudios
          </h1>
        </div>

        {/* Nav Items */}
        <div className="flex">
          <div className="hidden md:block">
            <div className="flex flex-row">
              {navItems.map((r) => (
                <NavItem name={r} url={r} key={r} />
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            {toggle === false && (
              <AlignJustify
                className="w-8 h-8 text-white cursor-pointer"
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </div>
      </div>

      {toggle && (
        <div
          className="
            absolute top-0 left-0 
            block md:hidden w-screen 
            h-[500px] bg-black"
        >
          <div className="flex flex-col justify-center h-full">
            <div className="absolute flex right-0 top-0">
              <X
                className="
                w-8 h-8 text-white m-4 cursor-pointer
                hover:rotate-12
                "
                onClick={() => setToggle(false)}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              {navItems.map((r) => (
                <NavItem name={r} url={r} key={r} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
