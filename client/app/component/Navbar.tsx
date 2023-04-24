'use client'
import React,{useState} from "react";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import Search from "./Search";
import SideMenu from "./SideMenu";


function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <nav className="flex fixed bg-red-500 py-1 top-0  flex-row items-center  w-full">
        <div className="mx-2">
          <VscMenu onClick={()=>setShowMenu(!showMenu)} size="2rem" />
        </div>
        <div className="flex  flex-row bg-green-500 justify-between w-full">
          <Image
            width={90}
            height={90}
            alt="My yt"
            className="sm:h-12 h-10 sm:w-auto w-12"
            src="/titleicon.png"
          />
          <Search />
          <div></div>
        </div>
          <div className={showMenu===true?"flex":"hidden"}>

        <SideMenu  />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
