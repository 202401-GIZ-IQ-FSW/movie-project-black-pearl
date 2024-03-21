"use client";

import BurgerButton from "./NavbarComponents/BurgerButton";
import Logo from "./Logo";
import NavButtons from "./NavbarComponents/NavButtons";
import SearchBox from "./NavbarComponents/SearchBox";
import SideMenu from "./NavbarComponents/SideMenu";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#131010] border-b-2 border-b-[#C0434B]">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4 md:gap-y-4 lg:gap-0">
        <Logo />
        <NavButtons />
        <div className="md:w-full md:flex md:justify-end lg:w-80">
          <SearchBox />
        </div>
        <BurgerButton toggleMenu={() => setIsMenuOpen(true)} />
      </div>
      <SideMenu isOpen={isMenuOpen} toggleClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}

export default Navbar;
