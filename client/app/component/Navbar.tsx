import React from "react";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import Search from "./Search";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <nav className="flex bg-red-500 py-1  flex-row items-center  w-full">
        <div className="mx-2">
          <VscMenu size='2rem' />
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
      </nav>
    </>
  );
}

export default Navbar;
