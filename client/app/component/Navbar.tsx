"use client";
import React, { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import Search from "./Search";
import SideMenu from "./SideMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="flex fixed bg-gray-500-500 py-1 top-0 bg-gray-500 flex-row items-center  w-full">
        <div className="mx-2">
          <VscMenu onClick={() => setShowMenu(!showMenu)} size="2rem" />
        </div>
        <div className="flex   h-full flex-row bg-gray-500 justify-between w-full">
          <Image
            width={90}
            height={90}
            alt="My yt"
            className="sm:h-12 h-10 sm:w-auto w-12"
            src="/titleicon.png"
          />
          <div className="flex  flex-row  items-center justify-center ">
            <Search />
          </div>
        </div>
        <div className={showMenu === true ? "flex " : "hidden"}>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="mt-2 h-full fixed left-0 w-full  sm:top-11 top-10 "
          >
            <div className="flex flex-col  items-center justify-between h-full w-56  bg-gray-500">
              <SideMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
