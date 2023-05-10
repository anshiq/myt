"use client";
import React, {  useState } from "react";
import { VscMenu } from "react-icons/vsc";
import Search from "./Search";
import SideMenu from "./SideMenu";
import Link from "next/link";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="flex fixed bg-gray-500-500 py-1  top-0 bg-gray-500 flex-row items-center  w-full">
        <div className="mx-2">
          <VscMenu onClick={() => setShowMenu(!showMenu)} size="2rem" />
        </div>
        <div className="flex   h-full flex-row bg-gray-500 justify-between w-full">
          <Link href={'/'}  className="sm:h-12 flex text-lg text-center items-center justify-center h-10 sm:w-auto w-12">
           My yt 
          </Link>
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
